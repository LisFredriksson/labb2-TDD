import { default as request } from 'supertest';
import { makeApp } from '../app';
import nock from 'nock'
import ContactModel from '../models/contactModel';
const app = makeApp()
jest.mock('../models/contactModel');

const validContactData = {
          id: '638cfd06f84b41a7be61ebad',
          firstname: 'Anna',
          lastname: 'Andersson',
          email: 'anna.andersson@gmail.com',
          personalnumber: '550713-1405',
          address: 'Utvecklargatan 12',
          zipCode: '111 22',
          city: 'Stockholm',
          country: 'Sweden',
      };
const invalidContactData = {
        "firstname": "Anna",
        "email": "invalid-email"
      };

describe('GET /contact', () => {
  it('should return JSON and status code 201', async () => {
    const response = await request(app)
      .get('/contact')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object');
  });
});

describe('GET /contact/:id', () => {
  it('should return status code 400 if invalid mongoDb id is sent', () => {
    expect(true).toBe(false)
  })
  it('should return a product when called with a valid id', () => {
    expect(true).toBe(false)
  })

})


describe('POST /contact - Valid Data', () => {
  it('should return status code 201 when posting a new contact', async () => {
    const response = await request(app)
      .post('/contact')
      .send(validContactData)
    expect(response.statusCode).toBe(201)
  })

  it('should call createContact 1 time', async () => {
    expect(true).toBe(false)
  })

  it('should return status code 400 when posting a new contact with invalid data', async () => {
    const response = await request(app)
      .post('/contact')
      .send(invalidContactData)
    expect(response.statusCode).toBe(400)
  })
});

describe('POST /contact - Invalid Data', () => {
  it('should return JSON with error messages for invalid data', async () => {
    const response = await request(app)
      .post('/contact')
      .send(invalidContactData)
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
