import express from 'express';
import { MailsController } from './mails.controller';

const router = express.Router();

// Interacciones
router.post('/create', MailsController.create);

export default router;