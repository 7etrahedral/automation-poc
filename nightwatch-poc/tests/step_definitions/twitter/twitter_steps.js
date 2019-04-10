const { client } = require('nightwatch-cucumber');
const { Given, Then } = require('cucumber');

const browser = client.page.twitter.twitter_home_page();

Given(/^user is at twitter homepage$/, () => {
  return browser.navigateToTwitterHomePage();
});

Then(/^user will see twitter page$/, () => {
  return browser.assertPageTitleTwitter();
});
