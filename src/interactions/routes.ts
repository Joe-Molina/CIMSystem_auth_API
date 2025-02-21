// routes/interactionRoutes.ts
import express from 'express';
import { InteractionController } from './interactions.controller';

const router = express.Router();

// Interacciones
router.get('/:accion/:type', InteractionController.getInteraction);
router.post('/create/', InteractionController.create);

export default router;