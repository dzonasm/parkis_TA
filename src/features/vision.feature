Feature: Test for Vision page

  Scenario: Open Vision Insurance
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    Then the main Vision title and description should be correct
    And correct icon is displayed next to the Vision title
    And the title and description of What is Vision Insurance? should be correct

  Scenario: Breadcrumb links testing
    Given the user is on the Vision page
    And the page path elements have correct text
    When the user clicks on the Healthcare link
    Then Healthcare page should be opened

    Given the user is on the Vision page
    And the page path elements have correct text
    When the user clicks on the Offerings link
    Then Offerings page should be opened

  Scenario: Test breadcrumb icons
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    Then the first breadcrumb arrow icon should exist and have a correct image shown
    And a second breadcrumb arrow icon should exist and have a correct image shown

  Scenario: Enter quiz from Vision page
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    And find your product button for Vision has correct text
    And find your product button for Vision is working
    Then the Quizzard page should be opened

  Scenario: Vision sidebar testing
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    Then sidebar headline text should be correct
    And the subheader and description of The simple math of vision insurance should be correct
    And the subheader and description of Encouraging good vision health should be correct
    And correct image should be displayed in sidebar content