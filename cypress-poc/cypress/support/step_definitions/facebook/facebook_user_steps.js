const browser = require('../../../support/page_objects/facebook/facebook_user_page');

then(/^user will see user page$/, () => {
  browser.commands.assertUserPage();
});
