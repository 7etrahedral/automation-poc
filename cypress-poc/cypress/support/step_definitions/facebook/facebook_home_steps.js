const browser = require('../../../support/page_objects/facebook/facebook_home_page');

given(/^user is at facebook homepage$/, () => {
  browser.commands.navigateToFacebookHomePage();
});

when(/^user click Buat Halaman button at home page$/, () => {
  browser.commands.clickButtonBuatHalaman();
});

when(/^user fill username and password$/, () => {
  browser.commands.setUserPass();
});
