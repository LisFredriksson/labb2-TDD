import request from 'supertest';
import { app } from '../app';

describe('app.ts', () => {
    it("should return json", () => {
        request(app)
        .get('/contact')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            if (err) throw err;
        })
    })
});
