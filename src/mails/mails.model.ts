import { prisma } from '../libs/prisma'

interface mailProps {
  accion: string
  nombre: string
  cedula: string
  msj: string
}


export class MailsModel {
  static async createMailMsj({accion, nombre, cedula, msj}: mailProps) {
    try {
      const response = await prisma.mails.create({ data: {
        accion,
        nombre, 
        cedula,
        msj
      } })
      return response
    } catch (error) {
      
      console.log(error)
      throw new Error("a");
      
    }
  }
}