Feature: Test quiz for Home Renters product 

    Scenario: Full fill quiz for Home Renters product
        Given the user is on the homeRenters page
        Then what type of work do you do? card title, subtitle and icon should be correct
            | Title    | What type of work do you do?                                    |
            | Subtitle | Your profession may qualify you for certain types of coverage.  |
            | Icon     | #Briefcase-Green                                                |
        Then click on input wrapper field
        And select Drafters proffesion
        And in what type of work do you do? card click next button
        Then do you own your own business? card title, subtitle and icon should be correct
            | Title    | Do you own your own business?                                   |
            | Icon     | /brighter-assets/icons/green_icons.svg#Circles-Green            |
        Then in do you own your own business? card choose option no
        And in do you own your own business? card click next button
        Then home owner card title, subtitle and icon should be correct
            | Title    | Home Owner                                                     |
            | Subtitle | Do you own the home that you primarily reside in? This determines your eligibility for homeowners insurance.  |
            | Icon     | #People-Green                                                  |
       Then in home owner card choose option no
       And in home owner card click next button
       And ieskok