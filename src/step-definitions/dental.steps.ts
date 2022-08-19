import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Dental from '../page-objects/dental.page';

const Page: Dental = Context.getInstance().getPage('Dental');

When(/^the Dental Insurance product page is opened$/, async () => {
  await Page.validateUrl();
});

Then(/^the main Dental title and description should be correct$/, async () => {
  await Page.validateDentalTitle();
  await Page.validateDentalDescription();
  await Page.validateDentalTitleImg();
});

Then(/^find your product button for Dental is working$/, async () => {
  await Page.validateDentalButtonFindYourProductElem();
  await Page.validateDentalButtonFindYourProductTextElem();
});

Then(/^the title and description of What is Dental Insurance should be correct$/, async () => {
  await Page.validateDentalOfferTitle();
  await Page.validateDentalOfferrDescription();
});

