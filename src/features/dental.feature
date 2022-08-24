Feature: Test for Dental page

  Scenario: Open Dental Insurance
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the main Dental title and description should be correct
    And the title and description of What is Dental Insurance should be correct
    And who typically needs it most? title, pictures and descriptions for Dental should be displayed
    # And find your product button for Dental? is working
    # Then the user is on the Quizzard page
    # When the Quizzard page is opened
    # Then validate back button label and click it


 Scenario: Test Dental header
    Given the user is on the Dental page 
    When the Dental Insurance product page is opened
    Then i can see in header Offerings and Healthcare links
    And find Offerings link is working
    And the offerings page is opened

    
    