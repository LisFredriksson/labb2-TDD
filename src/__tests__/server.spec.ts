import request from 'supertest';
import { app } from '../app';

test('should return a JSON response with status code 200', () => {
  return request(app)
    .get('/contact')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.headers['content-type']).toMatch(/json/);
    })
    .catch((error) => {
      throw error;
    });
});
