const { client } = require('nightwatch-cucumber');
const { Then } = require('cucumber');

const browser = client.page.facebook.facebook_create_pages_page();

Then(/^user will see facebook halaman page$/, () => {
  return browser.assertPageTitleFacebookHalaman();
});
