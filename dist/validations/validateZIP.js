"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateZIP = void 0;
const validateZIP = (zipCode) => {
    if (zipCode) {
        const cleanedZIP = zipCode.replace(/\s/g, '');
        return /^\d{5}$/.test(cleanedZIP);
    }
    return false; // or return true/false based on your validation logic
};
exports.validateZIP = validateZIP;
