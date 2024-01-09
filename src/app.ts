// app.ts
import express, { Request, Response } from 'express';
import contactRoutes from './routes/contactRoutes';
import { errorHandler } from './middleware/errorHandler';


export const makeApp = () => {
  const app = express();

  app.use(express.json());
  app.use('/contact', contactRoutes);
  app.use(errorHandler);

  return app

}
