Feature: Test for Dental page

  # Scenario: View Dental header elements 
  #   Given the user is on the Dental page
  #   When the Dental Insurance product page is opened
  #   Then the Dental title and description should be correct
  #   And user can see Offerings link
  #   And user can see Healthcare link
  #   And find Offerings link is working
  #   Then the Offerings page is opened
  #   Then the user is on the Dental page
  #   And find Healtcare link is working
  #   Then the Healtcare page is opened

  # Scenario: User can go to Quizzard page from Dental page and from Quizzard page go back to the previuosly page
  #   Given the user is on the Dental page
  #   When the Dental Insurance product page is opened
  #   Then find your product button for Dental? is working
  #   Then the user is on the Quizzard page
  #   When the Quizzard page is opened
  #   Then validate back button label and click it
  #   Then user should go back to Dental page 

  # Scenario: View Dental main section
  #   Given the user is on the Dental page
  #   Then the title and description of What is Dental Insurance? should be correct
  #   And who typically needs it most? title should be correct
  #   And picture and description of offering for Families should be correct
  #   And picture and description of offering for Older people plan should be correct
  #   And picture and description of offering for Dental issues plan should be correct

 Scenario: View Dental main section
      Given the user is on the Dental page
      Then the title and description of What is Dental Insurance? should be correct
      And who typically needs it most? title should be correct
      Then check the following data of offerings first column is correct 
        | Subtitle    | Families |
        | Description | Children greatly benefit from regular care and dental care is even required by some school systems. In addition, carrying a dental policy with orthodontics coverage can save money for many families. |
        | Picture     | /brighter-assets/icons/green_icons.svg#People-Green        |
      Then check the following data of offerings second column is correct 
        | Subtitle    | Older people |
        | Description | The older you are, the more likely you are to need extended dental services that can be high cost if paid out-of-pocket. |
        | Picture     | /brighter-assets/icons/green_icons.svg#Dragonfly-Green       |
      Then check the following data of offerings third column is correct 
        | Subtitle    | Dental issues |
        | Description | If you have experienced dental issues in the past, you may be more likely to need this type of coverage.  |
        | Picture     | /brighter-assets/icons/green_icons.svg#Dental-Green       |
  # Scenario: View start quiz section
  #   Given the user is on the Dental page
  #   Then the title and description of start quiz section should be correct
  #   And get started button text should be correct
  #   And find get started button is working
  #   Then Quizzard page should be opened
    
  # Scenario: View brighter card section
  #   Given the user is on the Dental page
  #   Then the title and description of brighter card should be correct
  #   And the brighter card has icons
  #   And the brighter card has a picture



  
   
