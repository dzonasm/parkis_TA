Feature: Test quiz for Home Renters product 

    Scenario: Full fill quiz for Home Renters product
        Given the user is on the homeRenters page
        Then what type of work do you do? card title, subtitle and icon should be correct
            | Title     | What type of work do you do?                                    |
            | Subtitle  | Your profession may qualify you for certain types of coverage.  |
            | Icon      | #Briefcase-Green                                                |
        Then click on input wrapper field
        And select Drafters proffesion
        And in what type of work do you do? card click next button
        Then do you own your own business? card title and icon should be correct
            | Title     | Do you own your own business?                                   |
            | Icon      | #Circles-Green                                                  |
        Then in do you own your own business? card choose option no
        And  in do you own your own business? card click next button
        Then home owner card title, subtitle and icon should be correct
            | Title     | Home Owner                                                      |
            | Subtitle  | Do you own the home that you primarily reside in? This determines your eligibility for homeowners insurance.  |
            | Icon      | #People-Green                                                   |
       Then in home owner card choose option no
       And in home owner card click next button
       Then a few additional details card title, subtitle and icon should be correct
            | Title     | A few additional details                                        |
            | Subtitle  | To show your recommended products, we need a little more information.   |
            | Icon      | #Circles-Green                                                  |
        Then fill date of birth input field
            | Date      | 01/01/1990                                                      |
        Then click on state of residence input field
        Then select UT in state of residence input field
        Then fill zip code input field
            | ZipCode   | 12345                                                           |
        And in a few additional details card click next button
        Then now let's find your perfect plan for each selected product card title, subtitle and icon should be correct
            | Title     | Now let's find your perfect plan for each selected product.     |
            | Subtitle  | Based on what you've told us, we recommend these products.      |
            | Icon      | #Circles-Green                                                  |
        Then in now let's find your perfect plan for each selected product card click next button
        Then about you card title and icon should be correct
            | Title     | About you                                                       |
            | Icon      | #Circles-Green                                                  |
        Then fill first name input field
            | FirstName | Walter                                                          |
        Then fill last name input field
            | LastName  | White                                                           |
        Then fill email input field
            | Email     | bestemail23@one.lt                                              |
        Then click on gender input field
        And select male gender in gender input field
        Then click on marital status input field
        And select single in marital status input field
        And in about you card click next button
        Then do you use tobacco or nicotine products? card title, subtitle and icon should be correct
            | Title     | Do you use tobacco or nicotine products?                        |
            | Subtitle  | Indicate regular usage any time in the last 12 months.          |
            | Icon      | #Circles-Green                                                  |
        Then in do you use tobacco or nicotine products? card choose option no
        And  in do you use tobacco or nicotine products? card click next button
        Then in a year, how often will you visit the doctor and/or fill a prescription? card title and icon should be correct
            | Title     | In a year, how often will you visit the doctor and/or fill a prescription?                        |
            | Icon      | #Drugs-Green                                                 |
        Then in a year, how often will you visit the doctor and/or fill a prescription? card choose rarely option
        And  in a year, how often will you visit the doctor and/or fill a prescription? card click next button
        Then in what options do you prefer in a medical plan? card title and icon should be correct
            | Title     | What options do you prefer in a medical plan?                        |
            | Icon      | #First-Aid-Green                                             |
        Then in what options do you prefer in a medical plan? card choose lower premium option
        And  in what options do you prefer in a medical plan? card click next button
        Then in select your vision preference card title and icon should be correct
            | Title     | Select your vision preference(s)                        |
            | Icon      | #Glasses-Green                                            |
        Then in select your vision preference card choose glasses option
        And  in select your vision preference card click next button
        Then in do you have a dependent? card title and icon should be correct
            | Title     | Do you have a dependent?                        |
            | Subtitle  | Typically dependents are classified as your children and must be under the age of 26.           |
            | Icon      | #People-Green                                            |
        Then in do you have a dependent? card choose option no
        And in do you have a dependent? card click next button
        And the user is on login page
        
       