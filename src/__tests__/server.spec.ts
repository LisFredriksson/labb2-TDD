import request from 'supertest';
import { app } from '../app';

describe('GET /contact', () => {
  it('should return JSON and status code 200', async () => {
    const response = await request(app)
      .get('/contact')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object');
  });
});

describe('POST /contact - Valid Data', () => {
  it('should return JSON and correct data structure for valid data', async () => {
    const response = await request(app)
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
  });
});

describe('POST /contact - Invalid Data', () => {
  it('should return JSON with error messages for invalid data', async () => {
    const invalidData = {
        "firstname": "Anna",
        "email": "invalid-email"
      };
    const response = await request(app)
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
  });
});
