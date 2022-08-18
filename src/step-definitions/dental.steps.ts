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

