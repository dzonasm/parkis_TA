import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Vision from '../page-objects/vision.page';
import Quizzard from '../page-objects/quizzard.page';
import Healthcare from '../page-objects/healthcare.page';
import Offerings from '../page-objects/offerings.page';
import { VisionData } from "../data/vision.data";
import { HealthcareData } from "../data/healthcare.data";
import { OfferingsData } from "../data/offerings.data";
import { QuizzardData } from "../data/quizzard.data";
import urls from '../data/urls';
import { clickElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL } from '../helpers/validators';

const Page: Vision = Context.getInstance().getPage('Vision');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Healthcare: Healthcare = Context.getInstance().getPage('Healthcare');
const _Offerings: Offerings = Context.getInstance().getPage('Offerings');

When(/^the Vision Insurance product page is opened$/, async () => {
  await expectToExist(Page.visionMainHeaderTitleElem);
  await expectURL(urls.healthcareProducts.vision, true);
});

When(/^the breadcrumb elements have correct text$/, async () => {
  await expectText(Page.visionMainHeaderBreadcrumbOfferingsLinkElem, VisionData.visionMainHeaderBreadcrumbOfferingsText);
  await expectText(Page.visiomMainHeaderBreadcrumbHealthcareLinkElem, VisionData.visionMainHeaderBreadcrumbHealthcareText);
  await expectText(Page.visionMainHeaderVisionInsuranceTextElem, VisionData.visionMainHeaderBreadcrumbVisionInsuranceText);
});

Then(/^the first breadcrumb arrow icon should exist$/, async () => {
  await expectToExist(Page.visionMainHeaderBreadcrumbFirstArrowIconElem);
});

Then(/^the second breadcrumb arrow icon should exist$/, async () => {
  await expectToExist(Page.visionMainHeaderBreadcrumbSecondArrowIconElem);
});

Then(/^correct image icon is shown for both arrows$/, async () => {
  await expectAttributeToContain(Page.visionMainHeaderBreadcrumbFirstArrowIconElem, "xlink:href", VisionData.visionMainHeaderBreadcrumbIconName);
  await expectAttributeToContain(Page.visionMainHeaderBreadcrumbSecondArrowIconElem, "xlink:href", VisionData.visionMainHeaderBreadcrumbIconName);
});

When(/^the user clicks on the Healthcare link$/, async () => {
  await clickElement(Page.visiomMainHeaderBreadcrumbHealthcareLinkElem, true);
});

Then(/^Healthcare page should be opened$/, async () => {
  await expectToExist(_Healthcare.healthcareTitleElem);
  await expectURL(urls.offerings.healthcare, true);
  await expectText(_Healthcare.healthcareTitleElem, HealthcareData.healthcareTitleText);
});

Then(/^the user should return to Vision page$/, async () => {
  browser.back();
  await expectToExist(Page.visionMainHeaderTitleElem);
  await expectURL(urls.healthcareProducts.vision, true);
});

Then(/^user should click on the Offerings link$/, async () => {
  await clickElement(Page.visionMainHeaderBreadcrumbOfferingsLinkElem, true);
});

Then(/^Offerings page should be opened$/, async () => {
  await expectToExist(_Offerings.offeringsTitleElem);
  await expectURL(urls.offerings.base, true);
  await expectText(_Offerings.offeringsTitleElem, OfferingsData.offeringsTitle);
});

Then(/^the main Vision title and description should be correct$/, async () => {
  await expectToExist(Page.visionMainHeaderTitleElem);
  await expectText(Page.visionMainHeaderTitleElem, VisionData.visionMainHeaderTitleText);
  await expectText(Page.visionMainHeaderDescElem, VisionData.visionMainHeaderDescText);
  await expectText(Page.visionMainHeaderBtnFindYourProductElem, VisionData.visionMainHeaderBtnFindYourProductText);
});

Then(/^correct icon is displayed next to the Vision title$/, async () => {
  await expectToExist(Page.visionMainHeaderImgElem);
  await expectAttributeToContain(Page.visionMainHeaderImgElem, "xlink:href", "/brighter-assets/icons/green_icons.svg#Glasses-Green");
});

Then(/^the title and description of What is Vision Insurance\? should be correct$/, async () => {
  await expectText(Page.visionMainContentHeaderElem, VisionData.visionMainContentHeaderText);
  await expectText(Page.visionMainContentDescElem, VisionData.visionMainContentDescText);
});

When(/^find your product button for Vision has correct text$/, async () => {
  await expectText(Page.visionMainHeaderBtnFindYourProductElem, VisionData.visionMainHeaderBtnFindYourProductText);
});

When(/^find your product button for Vision is working$/, async () => {
  await clickElement(Page.visionMainHeaderBtnFindYourProductElem, true);
  await expectToExist(_Quizzard.quizzardFirstQuestionHeaderText);
});

Then(/^the Quizzard page should be opened$/, async () => {
  await expectText(_Quizzard.quizzardFirstQuestionHeaderText, QuizzardData.quizzardFirstQuestionHeaderText);
  await expectURL(urls.quizLinks.Vision, true);
});

Then(/^sidebar headline text should be correct$/, async () => {
  await expectToExist(Page.visionMainSidebarTitleElem);
  await expectText(Page.visionMainSidebarTitleElem, VisionData.visionMainSidebarTitleText);
});

Then(/^the subheader and description of The simple math of vision insurance should be correct$/, async () => {
  await expectText(Page.visionMainSidebarFirstSubheaderDescElem, VisionData.visionMainSidebarFirstSubheaderDescText);
});

Then(/^the subheader and description of Encouraging good vision health should be correct$/, async () => {
  await expectText(Page.visionMainSidebarSecondSubheaderDescElem, VisionData.visionMainSidebarSecondSubheaderDescText);
});

Then(/^correct image should be displayed in sidebar content$/, async () => {
  await expectToExist(Page.visionMainSidebarImg);
  await expectAttributeToContain(Page.visionMainSidebarImg, "xlink:href", "/brighter-assets/icons/green_icons.svg#Glasses-Green");
});