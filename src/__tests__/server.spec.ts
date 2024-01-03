import request from 'supertest';
import { app } from '../app';

describe('GET /contact', () => {
  it('should return json and status code 200', (done) => {
    request(app)
      .get('/contact')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err); // Call done with the error if there's an issue
          return;
        }
        done();
      });
  });
});

describe('POST /contact', () => {
  it('should return json and correct data structure', (done) => {
    request(app)
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
      })
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }
        done();
      });
  });
});
