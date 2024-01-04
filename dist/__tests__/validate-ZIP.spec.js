"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateZIP_1 = require("../validations/validateZIP");
describe('validate-Zip.ts tests', () => {
    it('should return true for a valid zip code "12345"', () => {
        const result = (0, validateZIP_1.validateZIP)('12345');
        expect(result).toBe(true);
    });
    it('should return true for a valid zip code "123 45"', () => {
        const result = (0, validateZIP_1.validateZIP)('123 45');
        expect(result).toBe(true);
    });
    it('should return false for an invalid zip code "1234"', () => {
        const result = (0, validateZIP_1.validateZIP)('1234');
        expect(result).toBe(false);
    });
    it('should return false for an invalid zip code "123456"', () => {
        const result = (0, validateZIP_1.validateZIP)('123456');
        expect(result).toBe(false);
    });
    it('should return false for a non-numeric zip code "abcde"', () => {
        const result = (0, validateZIP_1.validateZIP)('abcde');
        expect(result).toBe(false);
    });
});
