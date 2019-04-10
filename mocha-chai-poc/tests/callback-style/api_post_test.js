const { expect } = require('chai');
const api = require('../../page-objects/callback-style/api_post_request.js');

const cases = require('../../test-cases/api_post_testcases.js');
const global = require('../../helper/global.js');

describe('POST request ./post Callback Style', () => {
  it(`@callback ${cases.scenario.getOK.desc}`, (done) => {
    api.postAPI(global.testData, (response) => {
      expect(response.status).to.equal(cases.scenario.getOK.response);
      done();
    });
  });
});
