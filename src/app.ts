// app.ts
import express, { Request, Response } from 'express';
import contactRoutes from './routes/contactRoutes';
import { errorHandler } from './middleware/errorHandler';
import { Contact } from './models/contactModel';

type contactProps = {
  createContactTest: (contactData: Contact) => Promise<Contact>
}


export const makeApp = ({ createContactTest }: contactProps ) => {

  const app = express();
  app.use(express.json());
  app.use('/contact', contactRoutes(createContactTest));
  app.use(errorHandler);

  return app

}
