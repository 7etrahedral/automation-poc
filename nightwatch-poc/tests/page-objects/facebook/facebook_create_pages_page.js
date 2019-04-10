/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const facebookCreatePages = {
  url: function setUrl() {
    const url = base.setURL(`${process.env.BASE_URL_FACEBOOK}/pages/creation/`);
    return url;
  },
  testData: {
    gratisText: 'Gratis. Cukup pilih jenis Halaman untuk mulai membuatnya.',
    pageTitleFacebookHalaman: 'Facebook',
  },
  elements: {
    gratisTextElement: '._4e2b.fsm.fwn.fcg',
  },
  commands: [{
    assertPageTitleFacebookHalaman() {
      return base.assertPageTitle(client, facebookCreatePages.testData.pageTitleFacebookHalaman);
    },
  }],
};

module.exports = facebookCreatePages;
