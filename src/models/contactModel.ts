// models/ContactModel.ts
import mongoose, { Document, Schema } from 'mongoose';

interface Contact {
  firstname: string;
  lastname: string;
  email: string;
  personalnumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

const contactSchema = new Schema<Contact & Document>({
  firstname: String,
  lastname: String,
  email: String,
  personalnumber: String,
  address: String,
  zipCode: String,
  city: String,
  country: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

export default ContactModel;
