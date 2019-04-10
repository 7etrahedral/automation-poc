/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const base = require('bizzy-nightwatch-base-page');

const facebookHome = {
  url() {
    const url = base.setURL(process.env.BASE_URL_FACEBOOK);
    return url;
  },
  testData: {
    gratisText: 'Gratis. Cukup pilih jenis Halaman untuk mulai membuatnya.',
    pageTitleFacebook: 'Facebook - Masuk atau Daftar',
    pageTitleFacebookHalaman: 'Facebook',
  },
  elements: {
    gratisTextElement: '._4e2b.fsm.fwn.fcg',
    linkTextBuatHalaman: '#reg_pages_msg>a',
    email: '.menu_login_container.rfloat._ohf>form>table>tbody>tr:nth-child(2)>td:nth-child(1)>input',
    pass: '.menu_login_container.rfloat._ohf>form>table>tbody>tr:nth-child(2)>td:nth-child(2)>input',
  },
  commands: [{
    navigateToFacebookHomePage() {
      return this.navigate();
    },
    clickButtonBuatHalaman() {
      base.clickLinkText(this, facebookHome.elements.linkTextBuatHalaman);
    },
  }],
};

module.exports = facebookHome;
