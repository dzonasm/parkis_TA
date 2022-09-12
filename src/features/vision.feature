Feature: Test for Vision page

  Scenario: Vision breadcrumb text and link navigation testing
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    And the breadcrumb elements have correct text
    And the first breadcrumb arrow icon should exist
    And the second breadcrumb arrow icon should exist
    Then correct image icon is shown for both arrows
    When the user clicks on the Healthcare link
    Then Healthcare page should be opened
    Then the user should return to Vision page
    And user should click on the Offerings link
    Then Offerings page should be opened

  Scenario: Vision header and main content testing
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    Then the main Vision title and description should be correct
    And correct icon is displayed next to the Vision title
    And the title and description of What is Vision Insurance? should be correct

  Scenario: Enter quiz from Vision page when user clicks "Find your product" button
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    And find your product button for Vision has correct text
    And find your product button for Vision is working
    Then the Quizzard page should be opened

  Scenario: Vision sidebar part testing
    Given the user is on the Vision page
    When the Vision Insurance product page is opened
    Then sidebar headline text should be correct
    And the subheader and description of The simple math of vision insurance should be correct
    And the subheader and description of Encouraging good vision health should be correct
    And correct image should be displayed in sidebar content