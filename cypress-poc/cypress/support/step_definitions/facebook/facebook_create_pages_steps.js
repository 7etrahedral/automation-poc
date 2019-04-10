const browser = require('../../../support/page_objects/facebook/facebook_create_pages_page');

given(/^user is at facebook create page$/, () => {
  browser.commands.navigateToFacebookCreatePage();
});

then(/^user will see facebook halaman page$/, () => {
  browser.commands.assertPageTitleFacebookHalaman();
});
