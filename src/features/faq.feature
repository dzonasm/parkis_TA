Feature: Tests for FAQ page

    Scenario: Check FAQ page title and description
    Given the user is on the FAQ page
    Then the FAQ title should be correct
    # Title text: Frequently asked questions
    And description header should be correct
    # Header text: Mercer IndigoSM is an integrated benefits platform tailored for non-traditional workers.
    And description should be correct
    # Description text: We’re changing how non-traditional workers get the most out of their benefits for a brighter future. 
    # Independent workers and small business owners are leading the way in non-traditional work but are not eligible for 
    # employer-sponsored total rewards programs. All workers deserve the opportunity to access benefit options to cover 
    # themselves, their families, their employees, and their businesses.

    Scenario: Check FAQ accordion items and their elements
    Given the user is on the FAQ page
    And first accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the first accordion item
    Then first accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of first accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Rosette-Green                                                                                                                                                                                                                      |
        | Question  | Do I qualify for these benefits?                                                                                                                                                                                                                                          |
        | Answer    | If you are a small business owner, part-time worker, on-demand worker, independent consultant, contract worker, or freelancer without access to an employer-sponsored benefits program, you are likely eligible for a variety of benefit options through Mercer Indigo.   |
    When user clicks on the first accordion item
    Then correct accordion toggle icon is displayed
    #
    And second accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the second accordion item
    Then second accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of second accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Target-Green                                                                                                                                           |
        | Question  | Do I need to be currently employed/under contract in order to enroll in benefits?                                                                                                             |
        | Answer    | No. Mercer IndigoSM provides access to benefits to members of the non-traditional workforce who want the flexibility to work on their own terms while receiving the benefits they deserve.    |
    When user clicks on the second accordion item
    Then correct accordion toggle icon is displayed
    #
    And third accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the third accordion item
    Then third accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of third accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Heart-Green                                                                                                                                                                                                |
        | Question  | How can I find out what benefits Mercer IndigoSM offers?                                                                                                                                                                                          |
        | Answer    | Mercer IndigoSM connects you with a comprehensive suite of benefits including health, life, business coverages, auto, dental, vision, and a variety of liability and security products. Click Offerings in the top navigation to find out more.   |
    When user clicks on the third accordion item
    Then correct accordion toggle icon is displayed
    #
    And fourth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the fourth accordion item
    Then fourth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of fourth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Lightbulb-Energy-Green                                                                                                                         |
        | Question  | How do I sign up for these benefits?                                                                                                                                                  |
        | Answer    | Take our quiz to receive your suggested products and drill down to specific plans that are right for you – then follow the links to our benefit partners to complete your purchase.   |
    When user clicks on the fourth accordion item
    Then correct accordion toggle icon is displayed
    #
    And fifth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the fifth accordion item
    Then fifth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of fifth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Piggy-Bank-Green                                                                                                                                                                                                       |
        | Question  | How do I know I’m getting the best plans for me?                                                                                                                                                                                                              |
        | Answer    | Our quiz will guide you through an analysis of your needs, and you’ll receive suggested products and drill down to specific plans that are right for you. Please review all plan details to ensure you have evaluated the features to make a determination.   |
    When user clicks on the fifth accordion item
    Then correct accordion toggle icon is displayed
    #
    And sixth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the sixth accordion item
    Then sixth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of sixth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Sliders-Green                                                                                                                                                  |
        | Question  | Can I customize my products in the quiz?                                                                                                                                                              |
        | Answer    | Yes – through the quiz, we will suggest products based on your working situation and lifestyle, and you have the opportunity to choose additional products or remove those you already have covered.  |
    When user clicks on the sixth accordion item
    Then correct accordion toggle icon is displayed
    #
    And seventh accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the seventh accordion item
    Then seventh accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of seventh accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Cash-Green                                                                                                                                                                                                                                                                         |
        | Question  | How much more are individual benefits compared to employer-sponsored benefits?                                                                                                                                                                                                                                            |
        | Answer    | Employer-sponsored benefits are usually subsidized by the employer and pass a percentage of the costs on to their employees. Mercer IndigoSM provides access to a suite of competitively priced benefits through our benefit partners. Many of these benefits are provided at prices not available in the retail market.  |
    When user clicks on the seventh accordion item
    Then correct accordion toggle icon is displayed
    #
    And eighth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the eighth accordion item
    Then eighth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of eighth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#People-Green                                                                                                                                                                       |
        | Question  | I know somebody who would like to enroll in benefits, however, they do not belong to my sponsoring entity/organization. How can they enroll in these benefits?                                                            |
        | Answer    | Mercer IndigoSM is available to all eligible individuals whether they belong to a sponsoring organization or not. Those who don’t belong to a sponsoring organization can review benefits and enroll at mercerindigo.com  |
    When user clicks on the eighth accordion item
    Then correct accordion toggle icon is displayed
    #
    And ninth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the ninth accordion item
    Then ninth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of ninth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Headphones-1-Green                                                                                                                                                                                             |
        | Question  | I do not want to enroll online, can I speak to an agent?                                                                                                                                                                                              |
        | Answer    | Yes. While Mercer IndigoSM is intended to provide digital enrollment, you are able to speak to agents regarding your insurance needs. Visit our Contact Us page to find multiple ways to reach out to speak to a representative who can assist you.   |
    When user clicks on the ninth accordion item
    Then correct accordion toggle icon is displayed
    #
    And tenth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the tenth accordion item
    Then tenth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of tenth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Chat_1-Green                                                                                                                                           |
        | Question  | I have a question about my current benefits. Who should I contact?                                                                                                                            |
        | Answer    | The partner providing the benefit will be able to answer any questions you have. Visit our Contact Us page to find our general contact information and benefit partner contact information.   |
    When user clicks on the tenth accordion item
    Then correct accordion toggle icon is displayed
    #
    And eleventh accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the eleventh accordion item
    Then eleventh accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of eleventh accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Pencil-Green                                                                                                                       |
        | Question  | Can I cancel my benefits at any time?                                                                                                                                     |
        | Answer    | Terms of cancellation may differ depending on the benefit(s) you enroll in. Termination guidelines will be provided to you by our benefit partners prior to enrollment.   |
    When user clicks on the eleventh accordion item
    Then correct accordion toggle icon is displayed
    #
    And twelfth accordion item is not expanded
    And correct accordion toggle icon is displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-add-outline 
    When user clicks on the twelfth accordion item
    Then twelfth accordion item should expand
    And accordion close icon should be displayed
    # Icon that should be displayed: /brighter-assets/icons/action_icons.svg#e-delete-outline
    Then check the following data of twelfth accordion item is correct
        | Image     | /brighter-assets/icons/green_icons.svg#Volatile-Green                                                                                                                                                                                                                         |
        | Question  | Will Mercer IndigoSM provide additional benefits in the future?                                                                                                                                                                                                               |
        | Answer    | We regularly review the benefits offered and update our offering based on a variety of factors, including demand. If you are looking for a specific benefit that is not currently offered, please visit our Contact Us page to reach out to inform us of your benefit needs.  |
    When user clicks on the twelfth accordion item
    Then correct accordion toggle icon is displayed