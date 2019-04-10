const { expect } = require('chai');
const api = require('../../page-objects/callback-style/api_get_request.js');
const cases = require('../../test-cases/api_get_testcases.js');

describe('@callback GET Request ./get Callback Style', () => {
  it(cases.scenario.getOK.desc, (done) => {
    api.getAPI((response) => {
      expect(response.status).to.equal(cases.scenario.getOK.response);
      done();
    });
  });
});
