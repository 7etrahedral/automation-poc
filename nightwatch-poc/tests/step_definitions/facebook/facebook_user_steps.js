const { client } = require('nightwatch-cucumber');
const { Then } = require('cucumber');

const browser = client.page.facebook.facebook_user_page();

Then(/^user will see user page$/, () => {
  return browser.assertUserPage();
});
