// controllers/contactController.ts
import { Request, Response } from 'express';
import ContactModel from '../models/contactModel';
import { validateText } from '../validations/validateText';
import { validateEmail } from '../validations/validateEmail';
import { validatePersonalNumber } from '../validations/validatePersonalNumber';
import { validateZIP } from '../validations/validateZIP';
jest.mock('../models/contactModel');

export const getContactInformation = (req: Request, res: Response): void => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Contact information' });
};

export const createContact = async (req: Request, res: Response): Promise<void> => {
  const contactData = req.body;
  const validationErrors = validateContactData(contactData);

  if (validationErrors.length > 0) {
    console.log('Validation Errors:', validationErrors);
    res.status(400).json({ errors: validationErrors });
  } else {
    try {
      const newContact = await ContactModel.create(contactData);
      console.log('Valid Data Received:', newContact);
      res.status(201).json({ message: 'Added new contact', contact: newContact });
    } catch (error) {
      console.error('Error saving contact to the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
