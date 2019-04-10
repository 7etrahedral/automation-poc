/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const facebookUser = {
  url: function setUrl() {
    const url = base.setURL(process.env.BASE_URL_FACEBOOK);
    return url;
  },
  testData: {
    profileNameData: process.env.FACEBOOK_PROFILE_NAME,
  },
  elements: {
    profileName: '._1vp5',
  },
  commands: [{
    assertUserPage() {
      return base.assertSpanContainsText(this, facebookUser.elements.profileName, facebookUser.testData.profileNameData);
    },
  }],
};

module.exports = facebookUser;
