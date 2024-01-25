// routes/contactRoutes.ts
import express from 'express';
import { getContactInformation, createContact } from '../controllers/contactControllers';

const contactRoutes = (createContactTest: Function) => {
  const router = express.Router();


  router.get('/:id', getContactInformation);
  router.post('/', createContact(createContactTest));

  return router;
};

export default contactRoutes;
