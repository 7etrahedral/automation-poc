/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const Path = '/post';

function postAPI(body) {
  return api.post(Path)
    .set('Content-Type', 'application/json')
    .send(body);
}

module.exports = {
  postAPI,
};
