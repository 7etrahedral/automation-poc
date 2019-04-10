const browser = require('../../../support/page_objects/facebook/facebook_login_page');

then(/^user is at login page$/, () => {
  browser.commands.navigateToFacebookHomePage();
});

then(/^user login using correct credential$/, () => {
  browser.commands.setUserPass();
  browser.commands.clickLoginButton();
});
