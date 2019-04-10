const facebookHome = {
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
  commands: {
    navigateToFacebookHomePage() {
      cy.visit(`${Cypress.env('base_url_facebook')}`);
    },
    clickButtonBuatHalaman() {
      cy.get(facebookHome.elements.linkTextBuatHalaman).click();
    },
  },
};

module.exports = facebookHome;
