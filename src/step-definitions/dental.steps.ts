import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Dental from '../page-objects/dental.page';
import Quizzard from '../page-objects/quizzard.page';
import Offerings from '../page-objects/offerings.page';

const Page: Dental = Context.getInstance().getPage('Dental');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Offerings: Offerings = Context.getInstance().getPage('Offerings');

When(/^the Dental Insurance product page is opened$/, async () => {
  await Page.validateUrl();
});

Then(/^the main Dental title and description should be correct$/, async () => {
  await Page.validateDentalTitle();
  await Page.validateDentalDescription();
  await Page.validateDentalTitleImg();
});

Then(/^the title and description of What is Dental Insurance should be correct$/, async () => {
  await Page.validateDentalOfferTitle();
  await Page.validateDentalOfferrDescription();
});

Then(/^who typically needs it most\? title, pictures and descriptions for Dental should be displayed$/, async () => {
 await Page.validateDentalFamiliesTitle();
 await Page.validateDentalFamiliesDescription();
 await Page.validateDentalFamiliesTitleImg();
});

Then(/^find your product button for Dental\? is working$/, async () => {
  await Page.validateDentalButtonFindYourProductElem();
  await Page.validateDentalButtonFindYourProductTextElem();
  await Page.validateDentalButtonIsWorking();
});

Then(/^the Quizzard page is opened$/, async () => {
  await _Quizzard.validateWizarCardTitle();
  await _Quizzard.validateUrl();
});

Then(/^validate back button label and click it$/, async () => {
  await _Quizzard.validateQuizzardBackButtonText();
  await _Quizzard.clickBackButton();
});

// Then(/^the Dental Insurance product page is opened$/, async () => {
//   await Page.validateUrl();
// });

// Scenario: Test Dental header

Then(/^i can see in header Offerings and Healthcare links$/, async () => {
   await Page.validateDentalOfferingsLinkElem();
});

Then(/^find Offerings link is working$/, async () => {
  await Page.validateDentalOfferingsLinkIsWorking();
});

Then(/^the offerings page is opened$/, async () => {
  await _Offerings.validateOfferingsTitle();
  await _Offerings.validateUrl();
});


