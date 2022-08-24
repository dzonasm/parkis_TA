Feature: Test for Dental page

  Scenario: Open Dental Insurance
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the main Dental title and description should be correct
    And the title and description of What is Dental Insurance? should be correct
    And who typically needs it most? title, pictures and descriptions for Dental should be displayed
    # And find your product button for Dental? is working
    # Then the user is on the Quizzard page
    # When the Quizzard page is opened
    # Then validate back button label and click it

 Scenario: Test Dental header
    Given the user is on the Dental page
    And i can see in header Offerings and Healthcare links
    When find Offerings link is working
    Then the offerings page is opened

Scenario: Test product button
    Given the user is on the Dental page
    And find your product button for Dental? is working
    When the Quizzard page is opened
    Then validate back button label and click it
    
    