/* eslint no-unused-vars: off */
const facebookCreatePages = {
  testData: {
    gratisText: 'Gratis. Cukup pilih jenis Halaman untuk mulai membuatnya.',
    pageTitleFacebookHalaman: 'Facebook',
  },
  elements: {
    gratisTextElement: '._4e2b.fsm.fwn.fcg',
  },
  commands: {
    navigateToFacebookCreatePage() {
      cy.visit(`${Cypress.env('base_url_facebook')}/pages/creation/`);
    },
    assertPageTitleFacebookHalaman() {
      cy.title().should('eq', facebookCreatePages.testData.pageTitleFacebookHalaman);
    },
  },
};

module.exports = facebookCreatePages;
