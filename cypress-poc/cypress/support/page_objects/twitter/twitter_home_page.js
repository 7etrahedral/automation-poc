const twitterHome = {
  elements: {
    pageTitleTwitter: 'Twitter. Inilah peristiwa yang sedang terjadi.',
  },
  commands: {
    navigateToTwitterHomePage() {
      cy.visit(`${Cypress.env('base_url_twitter')}`);
    },
    assertPageTitleTwitter() {
      cy.title().should('eq', twitterHome.elements.pageTitleTwitter);
    },
  },
};

module.exports = twitterHome;
