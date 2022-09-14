Feature: Test for Dental page

  Scenario: View Dental header elements 
    Given the user is on the Dental page
    Then the Dental title, description and picture should be correct
    And user can see breadcrumb Offerings link
    And user can see breadcrumb Healthcare link
    And user clicks on Offerings breadcrumb link
    Then user is navigated to Offerings page
    Then user should return to Dental page
    And user clicks on Healtcare breadcrumb link
    Then user is navigated to Healtcare page

  Scenario: User can go to Quizzard page from Dental page and from Quizzard page go back to the previuosly page
    Given the user is on the Dental page
    Then find your product button for Dental? is working
    Then the user is on the Quizzard page
    When the Quizzard page is opened
    Then user clicks on back button
    Then user should go back to Dental page 

  Scenario: View Dental main section
    Given the user is on the Dental page
    Then the title and description of What is Dental Insurance? should be correct
    And who typically needs it most? title should be correct
    Then check the following data of offerings first column is correct 
        | Subtitle    | Families                                                                                                                                                                                               |
        | Description | Children greatly benefit from regular care and dental care is even required by some school systems. In addition, carrying a dental policy with orthodontics coverage can save money for many families. |
        | Picture     | /brighter-assets/icons/green_icons.svg#People-Green                                                                                                                                                    |
    Then check the following data of offerings second column is correct 
        | Subtitle    | Older people                                                                                                                                                                                           |
        | Description | The older you are, the more likely you are to need extended dental services that can be high cost if paid out-of-pocket.                                                                               |
        | Picture     | /brighter-assets/icons/green_icons.svg#Dragonfly-Green                                                                                                                                                 |
    Then check the following data of offerings third column is correct 
        | Subtitle    | Dental issues                                                                                                                                                                                          |
        | Description | If you have experienced dental issues in the past, you may be more likely to need this type of coverage.                                                                                               |
        | Picture     | /brighter-assets/icons/green_icons.svg#Dental-Green                                                                                                                                                    |

  Scenario: View sidebar section
    Given the user is on the Dental page
    Then the title and description of sidebar should be correct
    And the sidebar has icons
    And the sidebar has a picture



  
   
