import { prisma } from '../libs/prisma'

interface InteractionProps {
  accion: string
  factura: number
  interaction_TypeId: number
}

export class InteractionModel {

  static async createInteraction({ accion, interaction_TypeId, factura }: InteractionProps) {
    try {
      if (factura) {
        const response = await prisma.payment.create({
          data: {
            factura,
            interaction: {
              create: {
                accion,
                interaction_TypeId
              }
            }
          }
        })
        return response
      } else {
        const response = await prisma.interactions.create({
          data: {
            accion,
            interaction_TypeId,
          }
        })
        return response
      }

    } catch (error) {
      return console.log(error)
    }
  }

  static async getInteractions({ accion, interaction_TypeId }: { accion: string, interaction_TypeId: number }) {

    const hoy = new Date();
    const hace1mes = new Date(hoy);
    hace1mes.setDate(hoy.getDate() - 30);

    try {

      const response = await prisma.interactions.findFirst({
        where: {
          accion,
          interaction_TypeId,
          createdAt: {
            gte: hace1mes,
            lte: hoy,
          }
        }
      })

      return response

    } catch (error) {
      return console.log(error)
    }

  }

}