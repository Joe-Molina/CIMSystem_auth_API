import { prisma } from '../libs/prisma'

export class ChecksModel {
  static async create(data: {
    accion: string
    tipo_pago: string
    referencia: string
    monto: number
    image: string
    destiny_banck: string
    origin_banck: string
    pay_date: string
  }) {
    try {
      const response = await prisma.comprobantes_de_pago.create({
        data,
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async getAll() {
    try {
      const response = await prisma.comprobantes_de_pago.findMany()
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async getById(id: number) {
    try {
      const response = await prisma.comprobantes_de_pago.findUnique({
        where: { id },
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async update(
    id: number,
    data: Partial<{
      accion: string
      tipo_pago: string
      referencia: string
      monto: number
      verificacion: boolean
      status: string
      msj: string
      image: string
      destiny_banck: string
      origin_banck: string
      pay_date: string
    }>
  ) {
    try {
      const response = await prisma.comprobantes_de_pago.update({
        where: { id },
        data,
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async delete(id: number) {
    try {
      const response = await prisma.comprobantes_de_pago.delete({
        where: { id },
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
