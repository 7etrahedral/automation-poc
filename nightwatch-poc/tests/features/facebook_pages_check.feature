Feature: As a user I want to aaccess Facebook pages

Background:
  Given user is at facebook homepage

@desktop @facebook @facebookhalaman @clear @quit
Scenario: Assertion Facebook home page
  When user click Buat Halaman button at home page
  Then user will see facebook halaman page

@desktop @facebook @facebooklogin @clear @quit
Scenario: Login to Facebook home page
  When user is at login page
    And user login using correct credential
  Then user will see user page
