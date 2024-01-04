import dotenv from 'dotenv';
import path from 'path';
import express, { Request, Response } from 'express';
import connectToDatabase from './db';
import { validatePersonalNumber } from './validations/validatePersonalNumber';
import { validateEmail } from './validations/validateEmail';
import { validateZIP } from './validations/validateZIP';
import { validateText } from './validations/validateText';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const app = express();
app.use(express.json());

app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Contact information' });
});

app.post('/contact', (req: Request, res: Response) => {
  const contactData = req.body;

  const validationErrors = validateContactData(contactData);

  if (validationErrors.length > 0) {
    console.log('Validation Errors:', validationErrors);
    res.status(400).json({ errors: validationErrors });
  } else {
    console.log('Valid Data Received:', contactData);
    res.status(201).json({ message: 'Added new contact' });

    // TODO: Save the contactData to the database here
  }

});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
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

// Validation function for contactData
function validateContactData(contactData: any): string[] {
  const errors: string[] = [];

  if (!validateText(contactData.firstname)) {
    errors.push('firstname is missing or invalid');
  }

  if (!validateText(contactData.lastname)) {
    errors.push('lastname is missing or invalid');
  }

  if (!validateEmail(contactData.email)) {
    errors.push('email is missing or invalid');
  }

  if (!validatePersonalNumber(contactData.personalnumber)) {
    errors.push('personalnumber is missing or invalid');
  }

  if (!validateText(contactData.address)) {
    errors.push('address is missing or invalid');
  }

  if (!validateZIP(contactData.zipCode)) {
    errors.push('zipCode is missing or invalid');
  }

  if (!validateText(contactData.city)) {
    errors.push('city is missing or invalid');
  }

  if (!validateText(contactData.country)) {
    errors.push('country is missing or invalid');
  }

  return errors;
}
