Feature: Test for Terms Of Use page

    Scenario: Check if Terms Of Use content is correct
        Given the user is on the termsOfUse page
        When the Terms Of Use page is opened
        And Terms Of Use title is correct
        And Icon next to Terms Of Use title is correct
        And date under Terms Of Use title is correct
        And Terms Of Use content text is correct
