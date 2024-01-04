import request from 'supertest';
import { app } from '../app';

describe('GET /contact', () => {
  it('should return json and status code 200', async () => {
    const response = await request(app)
      .get('/contact')
      .expect('Content-Type', /json/)
      .expect(200);
      expect(response.body).toBeDefined();
      expect(typeof response.body).toBe('object');
  });
});

describe('POST /contact', () => {
  it('should return json and correct data structure', async () => {
    const response = await request(app)
      .post('/contact')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        "firstname": "Anna",
        "lastname": "Andersson",
        "email": "anna.andersson@gmail.com",
        "personalnumber": "550713-1405",
        "address": "Utvecklargatan 12",
        "zipCode": "111 22",
        "city": "Stockholm",
        "country": "Sweden"
      });

  });
});
