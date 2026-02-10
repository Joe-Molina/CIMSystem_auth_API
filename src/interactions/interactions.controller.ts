import { Request, Response } from 'express';
import { InteractionModel } from './interactions.model';


export class InteractionController {
  // Crear una nueva interacción con observaciones opcionales
  static async createContact(req: Request, res: Response) {
    try {
      const { accion, user, cuotasIniciales } = req.body;

      console.log(req.body)

      const contactHistory = await InteractionModel.getAllCases()

      const isContact = contactHistory.find(contact => contact.accion == accion)

      if(isContact){
        console.log('ya estaba creado')
        res.status(201).json(isContact);
      } else {
        const contact = await InteractionModel.createCase({
          accion, user, cuotasIniciales
        });
        res.status(201).json(contact);
      }

    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
    // Crear una nueva interacción con observaciones opcionales
  static async getAllCases(_req: Request, res: Response) {
    try {

      const contact = await InteractionModel.getAllCases()
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

    static async getAllCasesHistory(_req: Request, res: Response) {
    try {

      const contact = await InteractionModel.getAllCasesHistory()
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getDataCases(_req: Request, res: Response) {
    try {

      const casos = await InteractionModel.getAllCases()

      const datos = {
        allCases: casos!.length,
        allResponse: casos!.filter(caso => caso.response|| caso.responseCall).length,
        ws: casos!.filter(caso => caso.contact).length, 
        calls: casos!.filter(caso => caso.contactCall).length,
        responseWs: casos!.filter(caso => caso.response && !caso.contactAvailable).length,
        responseCall: casos!.filter(caso => caso.responseCall && !caso.contactAvailable).length,
        noResponse: casos!.filter(caso => !caso.response && !caso.responseCall && !caso.contactAvailable).length,
        noContactAvailable: casos!.filter(caso => caso.contactAvailable).length,
        closeCases: casos!.filter(caso => caso.caseStatus && !caso.contactAvailable).length,
      }

      res.status(201).json(datos);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updateCuotasIniciales(req: Request, res: Response) {
    try {

      const {id, cuotas} = req.body     
      
      const response = InteractionModel.updateCaseQuotes({cuotas,id})

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getCasesByAction(req: Request, res: Response) {
    try {
      const {accion} = req.params
      console.log(accion)

      const cases = await InteractionModel.getCasesByAction({accion})
      res.status(201).json(cases);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updateContacts(req: Request, res: Response) {
    try {

      const {id} = req.body;
      const contact = await InteractionModel.updateContact(id)
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

    static async updateContactsCall(req: Request, res: Response) {
    try {

      const {id} = req.body;
      const contact = await InteractionModel.updateContactCall(id)
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updateResponse(req: Request, res: Response) {
    try {

      const {id} = req.body;
      const contact = await InteractionModel.updateResponse(id)
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updateResponseCall(req: Request, res: Response) {
    try {

      const {id} = req.body;
      const contact = await InteractionModel.updateResponseCall(id)
      res.status(201).json(contact);

    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

    static async updateContactAvailable(req: Request, res: Response) {
    try {

      const {id} = req.body;
      const contact = await InteractionModel.updateContactAvailable(id)
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updatePromisePayment(req: Request, res: Response) {
    try {
      const {id} = req.body;
      const contact = await InteractionModel.updatePromisePayment(id)
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updatePromise(req: Request, res: Response) {
    try {
      const {id, promesa} = req.body;

      if(promesa == '1') {
        const contact = await InteractionModel.updatePromisePayment(id)
        res.status(201).json(contact);

      } else if (promesa == '2'){ 
        const contact = await InteractionModel.updatePromiseNonPayment(id)
        res.status(201).json(contact);
      }

    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updatePayment(req: Request, res: Response) {
    try {
      const {id, PaymentId} = req.body;
      const contact = await InteractionModel.updatePayment({id, PaymentId})
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async updateNote(req: Request, res: Response) {
    try {
      const {id, note} = req.body;
      const contact = await InteractionModel.updateNote({id, note})
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}