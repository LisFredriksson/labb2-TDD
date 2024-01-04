"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = exports.getContactInformation = void 0;
const contactModel_1 = __importDefault(require("../models/contactModel")); // Import your data model
const validateText_1 = require("../validations/validateText");
const validateEmail_1 = require("../validations/validateEmail");
const validatePersonalNumber_1 = require("../validations/validatePersonalNumber");
const validateZIP_1 = require("../validations/validateZIP");
const getContactInformation = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ message: 'Contact information' });
};
exports.getContactInformation = getContactInformation;
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    // Validate the contact data
    const validationErrors = validateContactData(contactData);
    if (validationErrors.length > 0) {
        console.log('Validation Errors:', validationErrors);
        res.status(400).json({ errors: validationErrors });
    }
    else {
        try {
            // Save the contactData to the database
            const newContact = yield contactModel_1.default.create(contactData);
            console.log('Valid Data Received:', newContact);
            res.status(201).json({ message: 'Added new contact', contact: newContact });
        }
        catch (error) {
            console.error('Error saving contact to the database:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});
exports.createContact = createContact;
// Validation function for contactData
function validateContactData(contactData) {
    const errors = [];
    if (!(0, validateText_1.validateText)(contactData.firstname)) {
        errors.push('firstname is missing or invalid');
    }
    if (!(0, validateText_1.validateText)(contactData.lastname)) {
        errors.push('lastname is missing or invalid');
    }
    if (!(0, validateEmail_1.validateEmail)(contactData.email)) {
        errors.push('email is missing or invalid');
    }
    if (!(0, validatePersonalNumber_1.validatePersonalNumber)(contactData.personalnumber)) {
        errors.push('personalnumber is missing or invalid');
    }
    if (!(0, validateText_1.validateText)(contactData.address)) {
        errors.push('address is missing or invalid');
    }
    if (!(0, validateZIP_1.validateZIP)(contactData.zipCode)) {
        errors.push('zipCode is missing or invalid');
    }
    if (!(0, validateText_1.validateText)(contactData.city)) {
        errors.push('city is missing or invalid');
    }
    if (!(0, validateText_1.validateText)(contactData.country)) {
        errors.push('country is missing or invalid');
    }
    return errors;
}
