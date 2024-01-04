"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePersonalNumber = void 0;
const validatePersonalNumber = (personalNumber) => {
    return /^\d{6}(?:\d{2})?[-\s]?\d{4}$/.test(personalNumber);
};
exports.validatePersonalNumber = validatePersonalNumber;
