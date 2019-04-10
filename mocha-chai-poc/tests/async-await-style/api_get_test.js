const { expect } = require('chai');
const api = require('../../page-objects/async-await-style/api_get_request.js');
const cases = require('../../test-cases/api_get_testcases.js');

describe('@asyncawait GET Request ./get Async Await Style', () => {
  it(cases.scenario.getOK.desc, async () => {
    const response = await api.getAPI();
    expect(response.status).to.equal(cases.scenario.getOK.response);
  });
});
