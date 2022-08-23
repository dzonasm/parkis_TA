import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Vision from '../page-objects/vision.page';
import Quizzard from '../page-objects/quizzard.page';
import Healthcare from '../page-objects/healthcare.page';

const Page: Vision = Context.getInstance().getPage('Vision');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Healthcare: Healthcare = Context.getInstance().getPage('Healthcare');

When(/^the Vision Insurance product page is opened$/, async () => {
  await Page.validateUrl();
});

Then(/^the main Vision title and description should be correct$/, async () => {
  await Page.validateVisionTitle();
  await Page.validateVisionDescription();
  await Page.validateVisionImage();
});

Then(/^the title and description of What is Vision Insurance\? should be correct$/, async () => {
  await Page.validateVisionParHeader();
  await Page.validateVisionParText();
});

Then(/^the page path links have correct text$/, async () => {
  await Page.validateHealthcareLinkBreacrumbText();
  await Page.validateOfferingsLinkBreacrumbText();
});

When(/^the user clicks on the Healthcare link$/, async () => {
  await Page.clickHealthcareLinkOnBreadcrumb();
});

Then(/^Healthcare page should be opened$/, async () => {
  await _Healthcare.validateUrl();
  await _Healthcare.validateHealthcareTitle();
  await _Healthcare.validateHealthcareTitleText();
});

When(/^the user clicks on the Offerings link$/, async () => {
  await Page.clickOfferingsLinkOnBreadcrumb();
});

When(/^find your product button for Vision has correct text$/, async () => {
  await Page.validateFindYourProductButtonText();
});

When(/^find your product button for Vision is working$/, async () => {
  await Page.clickFindYourProductButton();
});

Then(/^the Quizzard page should be opened$/, async () => {
  await _Quizzard.validateQuizzardFirstQuestionHeaderText();
  //how to build urls correct way :)))
  //await _Quizzard.validateUrl();
});