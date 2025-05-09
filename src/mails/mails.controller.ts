import { Request, Response } from 'express';
import { MailsModel } from './mails.model';

export class MailsController {
  static async create(req: Request, res: Response) {
    try {
      console.log(req.body)

      const {accion, nombre, cedula, msj} = await req.body

      const mail = await MailsModel.createMailMsj({accion, nombre, cedula, msj});
      res.status(201).json(mail);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}