// app.ts
import express, { Request, Response } from 'express';
import connectToDatabase from './db';
import contactRoutes from './routes/contactRoutes';
import { errorHandler } from './middleware/errorHandler';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const app = express();
app.use(express.json());


app.use('/contact', contactRoutes);


app.use(errorHandler);

const startServer = async () => {
  try {
    await connectToDatabase();
    const PORT: string = process.env.PORT as string;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', (error as Error).message);
    process.exit(1);
  }
};

startServer();
