"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateEmail_1 = require("../validations/validateEmail");
describe('validate-email.ts tests', () => {
    it('should validate "jonatan@gmail.com" as a valid email', () => {
        const actualResult = (0, validateEmail_1.validateEmail)('jonatan@gmail.com');
        expect(actualResult).toBe(true);
    });
    it('should validate "jonatan@gmail" as an invalid email', () => {
        const actualResult = (0, validateEmail_1.validateEmail)('jonatan@gmail');
        expect(actualResult).toBe(false);
    });
    it('should validate "jonatan.com" as an invalid email', () => {
        const actualResult = (0, validateEmail_1.validateEmail)('jonatan.com');
        expect(actualResult).toBe(false);
    });
    it('should validate empty string as an invalid email', () => {
        const actualResult = (0, validateEmail_1.validateEmail)('');
        expect(actualResult).toBe(false);
    });
});
