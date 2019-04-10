const { client } = require('nightwatch-cucumber');
const { When } = require('cucumber');

const browser = client.page.facebook.facebook_login_page();

When(/^user is at login page$/, () => {
  return browser.navigateToFacebookHomePage();
});

When(/^user login using correct credential$/, () => {
  browser.setUserPass();
  browser.clickLoginButton();
});
