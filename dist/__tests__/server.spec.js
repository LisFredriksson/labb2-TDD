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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
describe('GET /contact', () => {
    it('should return JSON and status code 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app)
            .get('/contact')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toBeDefined();
        expect(typeof response.body).toBe('object');
    }));
});
describe('POST /contact - Valid Data', () => {
    it('should return JSON and correct data structure for valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app)
            .post('/contact')
            .send({
            "firstname": "Anna",
            "lastname": "Andersson",
            "email": "anna.andersson@gmail.com",
            "personalnumber": "900201-0529",
            "address": "Utvecklargatan 12",
            "zipCode": "111 22",
            "city": "Stockholm",
            "country": "Sweden"
        })
            .expect('Content-Type', /json/)
            .expect(201);
        expect(response.body).toEqual({ message: 'Added new contact' });
    }));
});
describe('POST /contact - Invalid Data', () => {
    it('should return JSON with error messages for invalid data', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidData = {
            "firstname": "Anna",
            "email": "invalid-email"
        };
        const response = yield (0, supertest_1.default)(app_1.app)
            .post('/contact')
            .send(invalidData)
            .expect('Content-Type', /json/)
            .expect(400);
        console.log(response.text);
        expect(response.body).toEqual({
            errors: [
                'lastname is missing or invalid',
                'email is missing or invalid',
                'personalnumber is missing or invalid',
                'address is missing or invalid',
                'zipCode is missing or invalid',
                'city is missing or invalid',
                'country is missing or invalid',
            ],
        });
    }));
});
