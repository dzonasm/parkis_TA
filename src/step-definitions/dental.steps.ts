import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Dental from '../page-objects/dental.page';
import Quizzard from '../page-objects/quizzard.page';
import Offerings from '../page-objects/offerings.page';
import Healthcare from '../page-objects/healthcare.page';

const Page: Dental = Context.getInstance().getPage('Dental');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Offerings: Offerings = Context.getInstance().getPage('Offerings');
const _Healthcare: Healthcare = Context.getInstance().getPage('Healthcare');

// Scenario: Test Dental header
When(/^the Dental Insurance product page is opened$/, async () => {
  await Page.validateUrl();
});

Then(/^the Dental title and description should be correct$/, async () => {
  await Page.validateDentalTitle();
  await Page.validateDentalDescription();
  await Page.validateDentalTitleImg();
});

Then(/^i can see Offerings and Healthcare links$/, async () => {
   await Page.validateDentalOfferingsLinkText();
   await Page.validateDentalHealtcareLinkText();
});

Then(/^find Offerings link is working$/, async () => {
  await Page.clickDentalOfferingsLink();
});

Then(/^the Offerings page is opened$/, async () => {
  await _Offerings.validateUrl();
  await _Offerings.validateOfferingsTitle();
  await _Offerings.validateOfferingsTitleText();
});

Then(/^find Healtcare link is working$/, async () => {
  await Page.clickDentalHealtcareLink();
});

Then(/^the Healtcare page is opened/, async () => {
  await _Healthcare.validateUrl();
  await _Healthcare.validateHealthcareTitle();
  await _Healthcare.validateHealthcareTitleText();
});

Then(/^find your product button for Dental\? is working$/, async () => {
  await Page.validateDentalButtonFindYourProductElem();
  await Page.validateDentalButtonFindYourProductTextElem();
  await Page.validateDentalButtonIsWorking();
});

When(/^the Quizzard page is opened$/, async () => {
  await _Quizzard.validateWizarCardTitle();
  await _Quizzard.validateUrl();
});

Then(/^validate back button label and click it$/, async () => {
  await _Quizzard.validateQuizzardBackButtonText();
  await _Quizzard.clickBackButton();
});

// Then(/^user should go back to Dental page$/, async () => {
//   await Page.validateDentalTitle();
//   await Page.validateUrl();
// });

// Scenario: Test Dental main section
Then(/^the title and description of What is Dental Insurance\? should be correct$/, async () => {
  await Page.validateDentalOfferTitle();
  await Page.validateDentalOfferrDescription();
});

Then(/^who typically needs it most\? title, pictures and descriptions for Dental should be displayed$/, async () => {
 await Page.validateDentalFamiliesTitle();
 await Page.validateDentalFamiliesDescription();
 await Page.validateDentalFamiliesTitleImg();
 await Page.validateOlderPeopleTitle();
 await Page.validateOlderPeopleDescription();
 await Page.validateOlderPeopleTitleImg();
 await Page.validateDentalIssuesTitle();
 await Page.validateDentalIssuesDescription();
 await Page.validateDentalIssuesTitleImg();
});

// Scenario: Test start quiz section
Then(/^the title and description of start quiz section should be correct$/, async () => {
  await Page.validateStartQuizTitleImg();
  await Page.validateStartQuizDescription();
  await Page.validateStartQuizlTitle();
});

Then(/^find get started button has correct text$/, async () => {
  await Page.validateDentalButtonStartQuizElem();
  await Page.validateDentalButtonStartQuizTextElem();
});

Then(/^find get started button is working$/, async () => {
  await Page.validateDentalButtonStartQuizIsWorking();
});

Then(/^Quizzard page should be opened$/, async () => {
  await _Quizzard.validateWizarCardTitle();
  await _Quizzard.validateUrl();
});

















// Then(/^the title and description of What is Dental Insurance\? should be correct$/, async () => {
//   await Page.validateDentalOfferTitle();
//   await Page.validateDentalOfferrDescription();
// });

// Then(/^who typically needs it most\? title, pictures and descriptions for Dental should be displayed$/, async () => {
//  await Page.validateDentalFamiliesTitle();
//  await Page.validateDentalFamiliesDescription();
//  await Page.validateDentalFamiliesTitleImg();
// });

// // Scenario: Test Dental header
// Then(/^i can see Offerings and Healthcare links$/, async () => {
//    await Page.validateDentalOfferingsLinkElem();
// });

// When(/^find Offerings link is working$/, async () => {
//   await Page.validateDentalOfferingsLinkIsWorking();
// });

// Then(/^the Offerings page is opened$/, async () => {
//   await _Offerings.validateOfferingsTitle();
//   await _Offerings.validateUrl();
// });

// // Scenario: Test product button
// Then(/^find your product button for Dental\? is working$/, async () => {
//   await Page.validateDentalButtonFindYourProductElem();
//   await Page.validateDentalButtonFindYourProductTextElem();
//   await Page.validateDentalButtonIsWorking();
// });

// Then(/^the Quizzard page is opened$/, async () => {
//   await _Quizzard.validateWizarCardTitle();
//   await _Quizzard.validateUrl();
// });

// Then(/^validate back button label and click it$/, async () => {
//   await _Quizzard.validateQuizzardBackButtonText();
//   await _Quizzard.clickBackButton();
// });

// // Then(/^the Dental Insurance product page is opened$/, async () => {
// //   await Page.validateUrl();
// // });


