/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const twitterHome = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL_TWITTER);
    return url;
  },
  elements: {
    pageTitleTwitter: "Twitter. It's what's happening.",
  },
  commands: [{
    navigateToTwitterHomePage() {
      return this.navigate();
    },
    assertPageTitleTwitter() {
      return base.assertPageTitle(this, twitterHome.elements.pageTitleTwitter);
    },
  }],
};

module.exports = twitterHome;
