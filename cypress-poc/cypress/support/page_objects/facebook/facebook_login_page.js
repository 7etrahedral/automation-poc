const facebookLogin = {
  testData: {
    emailData: `${Cypress.env('facebook_username')}`,
    passData: `${Cypress.env('facebook_pass')}`,
  },
  elements: {
    email: '#email',
    pass: '#pass',
    buttonLogin: '#loginbutton',
  },
  commands: {
    navigateToFacebookHomePage() {
      cy.visit(`${Cypress.env('base_url_facebook')}/login`);
    },
    clickLoginButton() {
      cy.get(facebookLogin.elements.buttonLogin).click();
    },
    setUserPass() {
      cy.get(facebookLogin.elements.email).clear().type(facebookLogin.testData.emailData);
      cy.get(facebookLogin.elements.pass).clear().type(facebookLogin.testData.passData);
    },
  },
};

module.exports = facebookLogin;
