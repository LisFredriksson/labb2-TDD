import { response } from 'express';
import { default as request } from 'supertest';
import { makeApp } from '../app';

export const createContactTest = jest.fn();

const app = makeApp({ createContactTest })

const validContactData = {
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
  it('should return JSON and status code 200', async () => {
    const response = await request(app)
      .get('/contact/:id')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object');
  });
});

describe('GET /contact/:id', () => {
  it('should return status code 400 if invalid mongoDb id is sent', async () => {
    const response = await request(app)
    .get('/contact/:fakeid')
    expect(response.statusCode).toBe(400)
  })

})

describe('GET /contact/:id', () => {
  it('should return a product when called with a valid id', async () => {
    const response = await request(app)
    .get('/contact/:6596ba0d54ec47857c359522')
    expect(response.statusCode).toBe(200)
  })

})


describe('POST /contact - Valid Data', () => {
  beforeEach(() => {
    createContactTest.mockReset();
    createContactTest.mockResolvedValue({
      firstname: 'Anna',
      lastname: 'Andersson',
      email: 'anna.andersson@gmail.com',
      personalnumber: '550713-1405',
      address: 'Utvecklargatan 12',
      zipCode: '111 22',
      city: 'Stockholm',
      country: 'Sweden',
    })
  })
  it('should return status code 201 when posting a new contact', async () => {
    const response = await request(app)
      .post('/contact')
      .send(validContactData)
    expect(response.statusCode).toBe(201)
  })

  it('should call createContact 1 time', async () => {
    const response = await request(app)
      .post('/contact')
      .send(validContactData)
    expect(createContactTest.mock.calls.length).toBe(1)
  })
});

describe('POST /contact - Invalid Data', () => {
  it('should return status code 400 when posting a new contact with invalid data', async () => {
    const response = await request(app)
      .post('/contact')
      .send(invalidContactData)
    expect(response.statusCode).toBe(400)
  })
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
