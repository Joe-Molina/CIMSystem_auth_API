import { monthEnd, monthStart } from '@formkit/tempo'
import { prisma } from '../libs/prisma'

export class InteractionModel {

    static async createCase({ accion, user, cuotasIniciales  }: {accion: string, user: number, cuotasIniciales: number}) {
    try {

        const response = await prisma.first_contact_lote.create({
          data: {
            userId: user,
            accion: accion,
            cuotasIniciales
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

        static async updateContactAvailable(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            contactAvailable: true,
            caseStatus: true
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

  static async updateContact(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            contact: true,
            contact_createdAt: new Date()
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

    static async updateContactCall(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            contactCall: true,
            contactCall_createdAt: new Date()
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

    static async updateResponse(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            response: true,
            response_createdAt: new Date()
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

  static async updateResponseCall(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            responseCall: true,
            responseCall_createdAt: new Date()
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

        static async updatePromisePayment(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            PromisePayment: true,
            PromiseNonPayment: false,
            caseStatus: true
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

  static async updatePromiseNonPayment(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            PromiseNonPayment: true,
            PromisePayment: false,
            caseStatus: true
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

    static async updatePayment({id, PaymentId}:{id: number, PaymentId: number}) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            Payment: true,
            PaymentId,
            caseStatus: true
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

      static async updateNote({id, note}:{id: number, note: string}) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            note
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

  static async updateCaseStatus(id: number) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            caseStatus: true
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

    static async updateCaseQuotes({id, cuotas}:{id: number, cuotas: number}) {
    try {

        const response = await prisma.first_contact_lote.update({
          where: {
            id
          },
          data: {
            cuotasIniciales: cuotas
          }
        })

        return response

    } catch (error) {
      return console.log(error)
    }
  }

  static async getAllCases() {
    try {
        const response = await prisma.first_contact_lote.findMany({
          where: {
            createdAt: {
              gte: monthStart(new Date()),
              lt: monthEnd(new Date()),
            }
          }
        })
        return response
    } catch (error) {
      console.log(error)
      return []
    }
  }

    static async getAllCasesHistory() {
    try {
        const response = await prisma.first_contact_lote.findMany()
        return response
    } catch (error) {
      return console.log(error)
    }
  }

    static async getCasesByAction({accion}: {accion: string}) {
    try {
        const response = await prisma.first_contact_lote.findMany({
          where: {
            accion
          }
        })
        return response
    } catch (error) {
      return console.log(error)
    }
  }

}