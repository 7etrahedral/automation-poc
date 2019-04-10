const { expect } = require('chai');
const Promise = require('bluebird');

const api = require('../../page-objects/promise-style/api_get_request.js');
const cases = require('../../test-cases/api_get_testcases.js');

describe('@promise GET Request ./get Promise Style', () => {
  // eslint-disable-next-line arrow-body-style
  it(cases.scenario.getOK.desc, () => {
    return api.getAPI()
      .then((response) => {
        expect(response.status).to.equal(cases.scenario.getOK.response);
      })
      .catch(err => Promise.reject(err));
  });
});
