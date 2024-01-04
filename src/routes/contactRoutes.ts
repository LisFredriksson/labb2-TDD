// routes/contactRoutes.ts
import express from 'express';
import { getContactInformation, createContact } from '../controllers/contactControllers';

const router = express.Router();

// Define routes
router.get('/', getContactInformation);
router.post('/', createContact);

export default router;
