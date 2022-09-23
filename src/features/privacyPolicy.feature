Feature: Tests for Privacy Policy page

  Scenario: Check if Privacy Policy content is correct
    Given the user is on the PrivacyPolicy page
    When the Privacy Policy page is opened
    And Privacy Policy title is correct
    And icon next to Privacy Policy title is correct
    And date under Privacy Policy title is correct
    And Privacy Policy content text is correct

