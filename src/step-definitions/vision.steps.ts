import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Vision from '../page-objects/vision.page';
import Quizzard from '../page-objects/quizzard.page';
import Healthcare from '../page-objects/healthcare.page';
import Offerings from '../page-objects/offerings.page';

const Page: Vision = Context.getInstance().getPage('Vision');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Healthcare: Healthcare = Context.getInstance().getPage('Healthcare');
const _Offerings: Offerings = Context.getInstance().getPage('Offerings');

When(/^the Vision Insurance product page is opened$/, async () => {
  await Page.validateUrl();
  await Page.validateVisionTitleElem();
});

Then(/^the main Vision title and description should be correct$/, async () => {
  await Page.validateVisionTitleText();
  await Page.validateVisionDescription();
});

Then(/^correct icon is displayed next to the Vision title$/, async () => {
  await Page.validateVisionHeaderImage();
  await Page.validateCorrectVisionHeaderImageIsDisplayed();
});

Then(/^the title and description of What is Vision Insurance\? should be correct$/, async () => {
  await Page.validateVisionParHeader();
  await Page.validateVisionParText();
});

Then(/^the page path elements have correct text$/, async () => {
  await Page.validateHealthcareLinkBreacrumbText();
  await Page.validateOfferingsLinkBreacrumbText();
  await Page.validateVisionInsuranceBreadcrumbText();
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

Then(/^Offerings page should be opened$/, async () => {
  await _Offerings.validateUrl();
  await _Offerings.validateOfferingsTitle();
});

Then(/^the first breadcrumb arrow icon should exist and have a correct image shown$/, async () => {
  await Page.validateVisionBreadcrumbFirstIcon();
  await Page.validateCorrectVisionBreadcrumbIconIsDisplayed(Page.visionBreadcrumbFirstIcon);
});

Then(/^a second breadcrumb arrow icon should exist and have a correct image shown$/, async () => {
  await Page.validateVisionBreadcrumbSecondIcon();
  await Page.validateCorrectVisionBreadcrumbIconIsDisplayed(Page.visionBreadcrumbSecondIcon);
});

When(/^find your product button for Vision has correct text$/, async () => {
  await Page.validateFindYourProductButtonText();
});

When(/^find your product button for Vision is working$/, async () => {
  await Page.clickFindYourProductButton();
});

Then(/^the Quizzard page should be opened$/, async () => {
  await _Quizzard.validateQuizzardFirstQuestionHeaderText();
  await _Quizzard.validateVisionUrl();
});

Then(/^sidebar headline text should be correct$/, async () => {
  await Page.validateSidebarTitleElem();
  await Page.validateSidebarTitleText();
});

Then(/^the subheader and description of The simple math of vision insurance should be correct$/, async () => {
  await Page.validateSidebarFirstSubheaderText();
});

Then(/^the subheader and description of Encouraging good vision health should be correct$/, async () => {
  await Page.validateSidebarSecondSubheaderText();
});

Then(/^correct image should be displayed in sidebar content$/, async () => {
  await Page.validateSidebarImage();
  await Page.validateCorrectSidebarImageIsDisplayed();
});