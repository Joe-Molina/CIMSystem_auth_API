import { NextFunction, Request, Response } from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { ChecksModel } from './checks.model'

export class ChecksController {
  static async createCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const { destiny_banck, origin_banck, accion, tipo_pago, referencia, monto, pay_date } = req.body
      const data: any = {
        destiny_banck,
        origin_banck,
        accion,
        tipo_pago,
        referencia,
        monto: monto ? parseFloat(monto) : 0,
        pay_date
      }

      if (req.file) {
        data.image = req.file.filename
      }

      console.log('Attempting to create check with data:', data)

      const check = await ChecksModel.create(data)
      res.status(201).json(check)
    } catch (error) {
      console.error('CRITICAL ERROR in createCheck:', error)
      next(error)
    }
  }


  static async getChecks(req: Request, res: Response, next: NextFunction) {
    try {
      const checks = await ChecksModel.getAll()
      res.json(checks)
    } catch (error) {
      next(error)
    }
  }

  static async getCheckById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const check = await ChecksModel.getById(Number(id))
      if (!check) {
        res.status(404).json({ error: 'Check not found' })
        return
      }
      res.json(check)
    } catch (error) {
      next(error)
    }
  }

  static async updateCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const check = await ChecksModel.update(Number(id), req.body)
      res.json(check)
    } catch (error) {
      next(error)
    }
  }

  static async deleteCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      await ChecksModel.delete(Number(id))
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }

  static serveImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { filename } = req.params
      const uploadsDir = path.join(process.cwd(), 'uploads', 'comprobantes')
      const filePath = path.join(uploadsDir, filename)

      if (!filePath.startsWith(uploadsDir)) {
        res.status(403).json({ error: 'Forbidden' })
        return
      }

      if (fs.existsSync(filePath)) {
        res.sendFile(filePath)
      } else {
        res.status(404).json({ error: 'Image not found' })
      }
    } catch (error) {
      next(error)
    }
  }
}
