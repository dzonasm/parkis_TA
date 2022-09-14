Feature: Test for Works page

  	Scenario: View Works header elements 
    	Given the user is on the Works page
    	Then check the following data of the header is correct
			| Title       |  Mercer Indigo works for you                      |
			| Description |  We’re changing how non-traditional workers get the most out of their benefits for a brighter future. Independent workers and small business owners are leading the way in non-traditional work but are not eligible for employer-sponsored total rewards programs. All workers deserve the opportunity to access benefit options to cover themselves, their families, their employees, and their businesses.                     |
			| Video       |   [ta-id="how-it-works_596318999"]          |
			| StartButtonIcon |  /brighter-assets/icons/controls_icons.svg#btn-play-outline                      |
	
	Scenario: View How it works sub-header elements
		Given the user is on the Works page
		Then check the following data of the sub-header is correct
			| Title       |  Customized products and plans                      |
			| Description |  Our quiz will guide you through an analysis of your needs, and you’ll receive suggested products and drill down to specific plans that are right for you. Then, follow the links to our benefit partners to complete your purchase.      |
			| Picture     |  /assets/images/protection-wheel.png                       |
	
	Scenario: View How it works main content elements
		Given the user is on the Works page
		Then main content title and description should be correct
			| Title       |  Our offerings                     |
			| Description |   We connect you with a comprehensive suite of benefits including health, life, business coverages, auto, dental, vision, and a variety of liability and security products.                      |
	  	Then check the following data of main content (0) card is correct
			| Subtitle | Healthcare                                             |
			| Icon     | /brighter-assets/icons/green_icons.svg#First-Aid-Green |
	  	Then check the following data of main content (1) card is correct
			| Subtitle | Auto                                                   |
			| Icon     | /brighter-assets/icons/green_icons.svg#Car-Green       |
	  	Then check the following data of main content (2) card is correct
			| Subtitle | Home                                                   |
			| Icon     | /brighter-assets/icons/green_icons.svg#House-Green     |
	  	Then check the following data of main content (3) card is correct
			| Subtitle | Life                                                   |
			| Icon     | /brighter-assets/icons/green_icons.svg#Flower-Green    | 
	  	Then check the following data of main content (4) card is correct
			| Subtitle | Business Risk                                          |
			| Icon     | /brighter-assets/icons/green_icons.svg#Briefcase-Green |

	Scenario: View Who is eligible section first cards elements
		Given the user is on the Works page
		Then check the following data of main content who is eligble section (0) card is correct
			| Title          | For you                                          |
			| Description    | Whether you’re an independent worker or small business owner, the lifestyle and independence you’ve earned is to be celebrated. What you may be missing is access to employer-sponsored benefits - and now, Mercer Indigo can connect you with the right individual insurance options. |
			| Picture        | /assets/images/benefits/01.png                   |
		    | ArrowRightIcon | /brighter-assets/icons/legacy_mosui_icons.svg#keyboard_arrow_right    |
	  	And check main content who is eligible section (0) card button text is correct
			| ButtonText     | Learn more                                       |
	  	And in eligible section (0) card user clicks on Learn more button
	  	Then user from (0) card is navigated to Quizzard page 

	Scenario: View Who is eligible section second cards elements
		Given the user is on the Works page
	  	Then check the following data of main content who is eligble section (1) card is correct
			| Title          |  For your business |
			| Description    | As a business owner, you have enough on your shoulders. Whether you have a small business with employees or are a sole proprietor, your business needs the right level of protection. Mercer Indigo has a suite of insurance products to reduce your business risks. |
	 		| Picture        | /assets/images/benefits/02.png                   |
		    | ArrowRightIcon | /brighter-assets/icons/legacy_mosui_icons.svg#keyboard_arrow_right    |
	  	And check main content who is eligible section (1) card button text is correct
 			| ButtonText     |  Learn more                                      |
 	  	And in eligible section (1) card user clicks on Learn more button
      	Then user from (1) card is navigated to Quizzard page 

	Scenario: View Who is eligible section third cards elements
		Given the user is on the Works page
	  	Then check the following data of main content who is eligble section (2) card is correct
			| Title          | Additional items to consider                    |
			| Description    | You, your family, and your business all have unique needs that may require extra protection. There are a variety of comprehensive and supplementary products to suit a range of specific personal and business situations - discover which plans suit your needs. |
	 		| Picture        | /assets/images/benefits/03.png                   |
	 		| ArrowRightIcon | /brighter-assets/icons/legacy_mosui_icons.svg#keyboard_arrow_right    |
	  	And check main content who is eligible section (2) card button text is correct
        	| ButtonText     | Learn more                                       |
       	And in eligible section (2) card user clicks on Learn more button
      	Then user from (2) card is navigated to Quizzard page 

   