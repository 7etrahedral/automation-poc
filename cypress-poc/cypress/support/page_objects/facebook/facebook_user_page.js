const facebookUser = {
  testData: {
    profileNameData: process.env.FACEBOOK_PROFILE_NAME,
  },
  elements: {
    profileName: '._1vp5',
  },
  commands: {
    assertUserPage() {
      cy.contains(facebookUser.elements.profileName, facebookUser.testData.profileNameData);
    },
  },
};

module.exports = facebookUser;
