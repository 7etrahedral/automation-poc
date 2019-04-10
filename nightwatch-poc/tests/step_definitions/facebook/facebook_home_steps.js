const { client } = require('nightwatch-cucumber');
const { Given, When } = require('cucumber');

const browser = client.page.facebook.facebook_home_page();

Given(/^user is at facebook homepage$/, () => {
  return browser.navigateToFacebookHomePage();
});

When(/^user click Buat Halaman button at home page$/, () => {
  return browser.clickButtonBuatHalaman();
});

When(/^user fill username and password$/, () => {
  return browser.setUserPass();
});
