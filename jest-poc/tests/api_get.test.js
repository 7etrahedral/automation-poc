const api = require('../page-objects/api_get_request.js');
const globalData = require('../helper/global');

describe('get test', () => {
  test('get test 1', async () => {
    const response = await api.getAPI();
    expect(response.status).toBe(globalData.response.ok);
  });
});
