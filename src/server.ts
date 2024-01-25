import path from 'path';
import connectToDatabase from './db';
import dotenv from 'dotenv';
import { makeApp } from './app';
import { createContactTest } from './__tests__/app.spec';


dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = makeApp({createContactTest})

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
