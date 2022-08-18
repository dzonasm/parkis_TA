Feature: Test for Dental page

  Scenario: Open Dental Insurance
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the main Dental title and description should be correct