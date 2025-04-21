// routes/interactionRoutes.ts
import express from 'express';
import { InteractionController } from './interactions.controller';

const router = express.Router();

// Interacciones
router.get('/:accion/:type', InteractionController.getInteraction);
router.post('/create/', InteractionController.create);
router.get('/all/month/:month/year/:year', InteractionController.getAllInteraction);


export default router;