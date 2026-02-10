// routes/interactionRoutes.ts
import express from 'express';
import { InteractionController } from './interactions.controller';

const router = express.Router();

// Interacciones
router.get('/get_contacts', InteractionController.getAllCases)
router.get('/get_contacts_history', InteractionController.getAllCasesHistory)
router.get('/get_cases/:accion', InteractionController.getCasesByAction)
router.get('/get_data_cases', InteractionController.getDataCases)
router.post('/create_contact/', InteractionController.createContact);
router.patch('/update_contact', InteractionController.updateContacts);
router.patch('/update_response', InteractionController.updateResponse);
router.patch('/update_contact_call', InteractionController.updateContactsCall);
router.patch('/update_response_call', InteractionController.updateResponseCall);
router.patch('/update_contact_available', InteractionController.updateContactAvailable);
router.patch('/update_note', InteractionController.updateNote);
router.patch('/update_promisePayment', InteractionController.updatePromisePayment);
router.patch('/update_promise', InteractionController.updatePromise);
router.patch('/update_cuotas', InteractionController.updateCuotasIniciales);

export default router;