Feature: Test for Dental page

  Scenario: View Dental header elements 
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then the Dental title and description should be correct
    And user can see Offerings link
    And user can see Healthcare link
    And find Offerings link is working
    Then the Offerings page is opened
    Then the user is on the Dental page
    And find Healtcare link is working
    Then the Healtcare page is opened

  Scenario: User can go to Quizzard page from Dental page and from Quizzard page go back to the previuosly page
    Given the user is on the Dental page
    When the Dental Insurance product page is opened
    Then find your product button for Dental? is working
    Then the user is on the Quizzard page
    When the Quizzard page is opened
    Then validate back button label and click it
    Then user should go back to Dental page 

  Scenario: View Dental main section
    Given the user is on the Dental page
    Then the title and description of What is Dental Insurance? should be correct
    And who typically needs it most? title should be correct
    And picture and description of offering for Families should be correct
    And picture and description of offering for Older people plan should be correct
    And picture and description of offering for Dental issues plan should be correct

  Scenario: View start quiz section
    Given the user is on the Dental page
    Then the title and description of start quiz section should be correct
    And get started button text should be correct
    And find get started button is working
    Then Quizzard page should be opened
    
  Scenario: View brighter card section
    Given the user is on the Dental page
    Then the title and description of brighter card should be correct
    And the brighter card has icons
    And the brighter card has a picture
   
