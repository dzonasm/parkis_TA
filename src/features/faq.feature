Feature: Tests for FAQ page

    Scenario: Check FAQ page title and description
    Given the user is on the Faq page
    Then the (title) exists and is correct
    And the (header) exists and is correct
    And the (description) exists and is correct

    Scenario: Check FAQ accordion items and their elements
    Given the user is on the Faq page
    # First
    And user checks that accordion item (0) has correct icons, title and status
        | CardIcon | Rosette-Green |
        | ExpansionIcon | e-add-outline |
        | Title | Do I qualify for these benefits? |
        | Status | false |
    And the user clicks on the accordion item (0)
    Then accordion item (0) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | If you are a small business owner, part-time worker, on-demand worker, independent consultant, contract worker, or freelancer without access to an employer-sponsored benefits program, you are likely eligible for a variety of benefit options through Mercer IndigoSM. |
        | Status | true |
    Then the user clicks on accordion item (0) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Second
    And user checks that accordion item (1) has correct icons, title and status
        | CardIcon | Target-Green |
        | ExpansionIcon | e-add-outline |
        | Title | Do I need to be currently employed/under contract in order to enroll in benefits? |
        | Status | false |
    And the user clicks on the accordion item (1)
    Then accordion item (1) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | No. Mercer IndigoSM provides access to benefits to members of the non-traditional workforce who want the flexibility to work on their own terms while receiving the benefits they deserve. |
        | Status | true |
    Then the user clicks on accordion item (1) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Third
    And user checks that accordion item (2) has correct icons, title and status
        | CardIcon | Heart-Green |
        | ExpansionIcon | e-add-outline |
        | Title | How can I find out what benefits Mercer IndigoSM offers? |
        | Status | false |
    And the user clicks on the accordion item (2)
    Then accordion item (2) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Mercer IndigoSM connects you with a comprehensive suite of benefits including health, life, business coverages, auto, dental, vision, and a variety of liability and security products. Click Offerings in the top navigation to find out more. |
        | Status | true |
    Then the user clicks on accordion item (2) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Fourth
    And user checks that accordion item (3) has correct icons, title and status
        | CardIcon | Lightbulb-Energy-Green |
        | ExpansionIcon | e-add-outline |
        | Title | How do I sign up for these benefits? |
        | Status | false |
    And the user clicks on the accordion item (3)
    Then accordion item (3) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Take our quiz to receive your suggested products and drill down to specific plans that are right for you – then follow the links to our benefit partners to complete your purchase. |
        | Status | true |
    Then the user clicks on accordion item (3) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Fifth
    And user checks that accordion item (4) has correct icons, title and status
        | CardIcon | Piggy-Bank-Green |
        | ExpansionIcon | e-add-outline |
        | Title | How do I know I’m getting the best plans for me? |
        | Status | false |
    And the user clicks on the accordion item (4)
    Then accordion item (4) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Our quiz will guide you through an analysis of your needs, and you’ll receive suggested products and drill down to specific plans that are right for you. Please review all plan details to ensure you have evaluated the features to make a determination. |
        | Status | true |
    Then the user clicks on accordion item (4) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Sixth
    And user checks that accordion item (5) has correct icons, title and status
        | CardIcon | Sliders-Green |
        | ExpansionIcon | e-add-outline |
        | Title | Can I customize my products in the quiz? |
        | Status | false |
    And the user clicks on the accordion item (5)
    Then accordion item (5) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Yes – through the quiz, we will suggest products based on your working situation and lifestyle, and you have the opportunity to choose additional products or remove those you already have covered. |
        | Status | true |
    Then the user clicks on accordion item (5) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Seventh
    And user checks that accordion item (6) has correct icons, title and status
        | CardIcon | Cash-Green |
        | ExpansionIcon | e-add-outline |
        | Title | How much more are individual benefits compared to employer-sponsored benefits? |
        | Status | false |
    And the user clicks on the accordion item (6)
    Then accordion item (6) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Employer-sponsored benefits are usually subsidized by the employer and pass a percentage of the costs on to their employees. Mercer IndigoSM provides access to a suite of competitively priced benefits through our benefit partners. Many of these benefits are provided at prices not available in the retail market. |
        | Status | true |
    Then the user clicks on accordion item (6) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Eighth
    And user checks that accordion item (7) has correct icons, title and status
        | CardIcon | People-Green |
        | ExpansionIcon | e-add-outline |
        | Title | I know somebody who would like to enroll in benefits, however, they do not belong to my sponsoring entity/organization. How can they enroll in these benefits? |
        | Status | false |
    And the user clicks on the accordion item (7)
    Then accordion item (7) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Mercer IndigoSM is available to all eligible individuals whether they belong to a sponsoring organization or not. Those who don’t belong to a sponsoring organization can review benefits and enroll at mercerindigo.com |
        | Status | true |
    Then the user clicks on accordion item (7) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Ninth
    And user checks that accordion item (8) has correct icons, title and status
        | CardIcon | Headphones-1-Green |
        | ExpansionIcon | e-add-outline |
        | Title | I do not want to enroll online, can I speak to an agent? |
        | Status | false |
    And the user clicks on the accordion item (8)
    Then accordion item (8) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Yes. While Mercer IndigoSM is intended to provide digital enrollment, you are able to speak to agents regarding your insurance needs. Visit our Contact Us page to find multiple ways to reach out to speak to a representative who can assist you. |
        | Status | true |
    Then the user clicks on accordion item (8) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Tenth
    And user checks that accordion item (9) has correct icons, title and status
        | CardIcon | Chat_1-Green |
        | ExpansionIcon | e-add-outline |
        | Title | I have a question about my current benefits. Who should I contact? |
        | Status | false |
    And the user clicks on the accordion item (9)
    Then accordion item (9) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | The partner providing the benefit will be able to answer any questions you have. Visit our Contact Us page to find our general contact information and benefit partner contact information. |
        | Status | true |
    Then the user clicks on accordion item (9) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Eleventh
    And user checks that accordion item (10) has correct icons, title and status
        | CardIcon | Pencil-Green |
        | ExpansionIcon | e-add-outline |
        | Title | Can I cancel my benefits at any time? |
        | Status | false |
    And the user clicks on the accordion item (10)
    Then accordion item (10) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | Terms of cancellation may differ depending on the benefit(s) you enroll in. Termination guidelines will be provided to you by our benefit partners prior to enrollment. |
        | Status | true |
    Then the user clicks on accordion item (10) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |
    # Twelfth
    And user checks that accordion item (11) has correct icons, title and status
        | CardIcon | Volatile-Green |
        | ExpansionIcon | e-add-outline |
        | Title | Will Mercer IndigoSM provide additional benefits in the future? |
        | Status | false |
    And the user clicks on the accordion item (11)
    Then accordion item (11) is expanded and correct icon, status and description is displayed
        | ExpansionIcon | e-delete-outline |
        | Description | We regularly review the benefits offered and update our offering based on a variety of factors, including demand. If you are looking for a specific benefit that is not currently offered, please visit our Contact Us page to reach out to inform us of your benefit needs. |
        | Status | true |
    Then the user clicks on accordion item (11) again and it should be closed and icon changed
        | ExpansionIcon | e-add-outline |
        | Status | false |