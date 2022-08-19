Feature: Test for Dental page

  Scenario: Open Dental Insurance
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the main Dental title and description should be correct
    And find your product button for Dental? is working
    # And the title and description of What is Dental Insurance should be correct
    