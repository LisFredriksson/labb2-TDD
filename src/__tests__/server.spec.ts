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
    it('should return json and correct data structure for valid data', async () => {
      const response = await request(app)
        .post('/contact')
        .send({
          "firstname": "Anna",
          "lastname": "Andersson",
          "email": "anna.andersson@gmail.com",
          "personalnumber": "550713-1405",
          "address": "Utvecklargatan 12",
          "zipCode": "111 22",
          "city": "Stockholm",
          "country": "Sweden"
        })
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body).toEqual({ message: 'Added new contact' });
    });

    it('should return json with error messages for invalid data', async () => {
      const response = await request(app)
        .post('/contact')
        .send({
          // Intentionally providing invalid data
          "firstname": "Anna",
          "email": "invalid-email", // Invalid email
        })
        .expect('Content-Type', /json/)
        .expect(400);

      // Your assertions on the response go here
      expect(response.body).toEqual([
        { error: 'lastname is missing' },
        { error: 'personalnumber is missing' },
        { error: 'address is missing' },
        { error: 'zipCode is missing' },
        { error: 'city is missing' },
        { error: 'country is missing' },
        { error: 'email is not valid' },
      ]);
    });
  });
