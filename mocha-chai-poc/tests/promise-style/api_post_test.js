const { expect } = require('chai');
const Promise = require('bluebird');

const api = require('../../page-objects/promise-style/api_post_request.js');
const cases = require('../../test-cases/api_post_testcases.js');
const global = require('../../helper/global.js');

describe('POST request ./post Promise Style', () => {
  // eslint-disable-next-line arrow-body-style
  it(`@promise ${cases.scenario.getOK.desc}`, () => {
    return api.postAPI(global.testData)
      .then((response) => {
        expect(response.status).to.equal(cases.scenario.getOK.response);
      })
      .catch(err => Promise.reject(err));
  });
});
