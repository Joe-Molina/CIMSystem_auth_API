import { Request, Response } from 'express';
import { InteractionModel } from './interactions.model';


export class InteractionController {
  // Crear una nueva interacción con observaciones opcionales
  static async create(req: Request, res: Response) {
    try {
      const { accion, interaction_TypeId, factura } = req.body;

      console.log(req.body)

      const interaction = await InteractionModel.createInteraction({
        accion,
        interaction_TypeId,
        factura
      });
      res.status(201).json(interaction);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getInteraction(req: Request, res: Response) {
    try {
      const { accion, type } = req.params;

      console.log(req.params)

      const interaction = await InteractionModel.getInteractions({
        accion,
        interaction_TypeId: Number(type),
      });

      if (interaction) {
        res.status(200).json(true);
      } else {
        res.status(200).json(false);
      }


    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}