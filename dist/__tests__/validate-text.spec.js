"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateText_1 = require("../validations/validateText");
describe('validateText.ts tests', () => {
    it('should return true if valid text input', () => {
        const inputText = "Hello, this is valid text!";
        const result = (0, validateText_1.validateText)(inputText);
        expect(result).toBe(true);
    });
    it('should return false if empty text input', () => {
        const result = (0, validateText_1.validateText)('');
        expect(result).toBe(false);
    });
    it('should return false if null', () => {
        const result = (0, validateText_1.validateText)(null);
        expect(result).toBe(false);
    });
    it('should return false if input is containing special characters', () => {
        const result = (0, validateText_1.validateText)('text@Text');
        expect(result).toBe(false);
    });
});
