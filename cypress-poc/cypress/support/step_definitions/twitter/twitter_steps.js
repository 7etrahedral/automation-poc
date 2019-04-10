const browser = require('../../../support/page_objects/twitter/twitter_home_page');

given(/^user is at twitter homepage$/, () => {
  browser.commands.navigateToTwitterHomePage();
});

then(/^user will see twitter page$/, () => {
  browser.commands.assertPageTitleTwitter();
});
