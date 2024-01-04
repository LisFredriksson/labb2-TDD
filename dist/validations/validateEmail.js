"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (email) => {
    if (email === null || email === undefined || email.length === 0) {
        return false;
    }
    else {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailValid.test(email);
    }
};
exports.validateEmail = validateEmail;
