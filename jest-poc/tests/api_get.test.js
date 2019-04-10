const supertest = require('supertest');

const api = supertest(process.env.API_BASE_URL);

describe('get test', () => {
  test('get test 1', () => {
    const response = api.get('/get');
    console.log(response);
  });
});
