Feature: As a user I want to aaccess Facebook pages

Background:
  Given user is at facebook homepage

@desktop @facebook @facebookhalaman
Scenario: Assertion Facebook home page
  Given user is at facebook create page
  Then user will see facebook halaman page

@desktop @facebook @facebooklogin
Scenario: Login to Facebook home page
  When user is at login page
    And user login using correct credential
  Then user will see user page
