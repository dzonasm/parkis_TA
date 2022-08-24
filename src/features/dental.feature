Feature: Test for Dental page

  Scenario: Test Dental header
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the Dental title and description should be correct
    And i can see Offerings and Healthcare links
    And find Offerings link is working
    Then the Offerings page is opened

    Given the user is on the Dental page
    And find Healtcare link is working
    Then the Healtcare page is opened

    Given the user is on the Dental page
    And find your product button for Dental? is working

    Given the user is on the Quizzard page
    When the Quizzard page is opened
    Then validate back button label and click it
    # Then user should go back to Dental page 

  Scenario: Test Dental main section
    Given the user is on the Dental page
    Then the title and description of What is Dental Insurance? should be correct
    And who typically needs it most? title, pictures and descriptions for Dental should be displayed

  Scenario: Test start quiz section
    Given the user is on the Dental page
    Then the title and description of start quiz section should be correct
    And find get started button has correct text
    And find get started button is working
    Then Quizzard page should be opened
    











#   Scenario: Open Dental Insurance
#     Given the user is on the Dental page
#     When the Dental Insurance product page is opened
#     Then the main Dental title and description should be correct
#     And the title and description of What is Dental Insurance? should be correct
#     And who typically needs it most? title, pictures and descriptions for Dental should be displayed
#     # And find your product button for Dental? is working
#     # Then the user is on the Quizzard page
#     # When the Quizzard page is opened
#     # Then validate back button label and click it

#  Scenario: Test Dental header
#     Given the user is on the Dental page
#     And i can see in header Offerings and Healthcare links
#     When find Offerings link is working
#     Then the offerings page is opened

# Scenario: Test product button
#     Given the user is on the Dental page
#     And find your product button for Dental? is working
#     When the Quizzard page is opened
#     Then validate back button label and click it
    
    