const api = require('../page-objects/api_post_request.js');
const globalData = require('../helper/global');

describe('post test', () => {
  test('post test 1', async () => {
    const response = await api.postAPI(globalData.testData);
    expect(response.status).toBe(globalData.response.created);
  });
});
