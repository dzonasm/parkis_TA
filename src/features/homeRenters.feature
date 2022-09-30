Feature: Test quiz for Home Renters product 

    Scenario: Full fill quiz for Home Renters product
        Given the user is on the homeRenters page
        Then first card title subtitle and icon should be correct
            | Title   | What type of work do you do?                                    |
            | Subtitle| Your profession may qualify you for certain types of coverage.  |
            | Icon    | /brighter-assets/icons/green_icons.svg#Briefcase-Green          |
        Then click on input wrapper
        Then select Drafters proffesion
        And Click next button
        Then ieskom
        
       