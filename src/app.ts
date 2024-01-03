import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectToDatabase from './db';
import { response } from 'express';
import { request } from 'express';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const app = express();

app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Contact information' });
});

app.post('/contact', (req, res) => {
  res.json({
    "firstname": "Anna",
    "lastname": "Andersson",
    "email": "anna.andersson@gmail.com",
    "personalnumber": "550713-1405",
    "address": "Utvecklargatan 12",
    "zipCode": "111 22",
    "city": "Stockholm",
    "country": "Sweden"
  })
  res.status(200).json({ message: 'Added new contact' });
});

const startServer = async () => {
  try {
    const db = await connectToDatabase();
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
