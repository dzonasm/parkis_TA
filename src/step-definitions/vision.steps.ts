import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Vision from '../page-objects/vision.page';

const Page: Vision = Context.getInstance().getPage('Vision');

When(/^the Vision Insurance product page is opened$/, async () => {
  await Page.validateUrl();
});

Then(/^the main Vision title and description should be correct$/, async () => {
  await Page.validateVisionTitle();
  await Page.validateVisionDescription();
  await Page.validateVisionImage();
});