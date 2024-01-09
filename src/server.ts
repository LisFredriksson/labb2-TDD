import path from 'path';
import connectToDatabase from './db';
import dotenv from 'dotenv';
import { makeApp } from './app';


dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = makeApp()

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
