import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Dental from '../page-objects/dental.page';
import Quizzard from '../page-objects/quizzard.page';
import Offerings from '../page-objects/offerings.page';
import Healthcare from '../page-objects/healthcare.page';
import { Data } from "../data/dental.data";
import { OfferingsData } from "../data/offerings.data";
import { HealthcareData } from "../data/healthcare.data";
import { QuizzardData } from '../data/quizzard.data';
import urls from "../data/urls";
import { clickElement, getElement, getNthElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL, expectValue } from "../helpers/validators";


const Page: Dental = Context.getInstance().getPage('Dental');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');
const _Offerings: Offerings = Context.getInstance().getPage('Offerings');
const _Healthcare: Healthcare = Context.getInstance().getPage('Healthcare');

When(/^the Dental Insurance product page is opened$/, async () => {
  await expectURL(urls.healthcareProducts.dental, true);
});

Then(/^the Dental title and description should be correct$/, async () => {
  await expectText(await Page.dentalTitleElem, Data.dentalTitle);
  await expectText(await Page.dentalDescriptionElem, Data.dentalDescription);
  await expectToExist(await Page.dentalHeaderTitleImage);
  await expectAttributeToContain(await Page.dentalHeaderTitleImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
});

Then(/^user can see Offerings link$/, async () => {
  await expectText(await Page.dentalOfferingsLinkTextElem, Data.dentalOfferingsLinkText);
  await expectAttributeToContain(await Page.dentalOfferingsHref, "href", "/client/indigo/offerings");
});

Then(/^user can see Healthcare link$/, async () => {
  await expectText(await Page.dentalHealtcareLinkTextElem, Data.dentalHealtcareLinkText);
  await expectAttributeToContain(await Page.dentalHealtcareHref, "href", "/client/indigo/offerings/606d91a9cf72104f54e0ddd9");
});

Then(/^find Offerings link is working$/, async () => {
  await clickElement(await Page.dentalOfferingsLinkTextElem, true);
});

Then(/^the Offerings page is opened$/, async () => {
  await expectURL(urls.offerings.base, true);
  await expectToExist(await _Offerings.offeringsTitleElem);
  await expectText(await _Offerings.offeringsTitleElem, OfferingsData.offeringsTitleText);
});

Then(/^find Healtcare link is working$/, async () => {
  await clickElement(await Page.dentalHealtcareLinkTextElem, true);
});

Then(/^the Healtcare page is opened/, async () => {
  await expectURL(urls.offerings.healthcare, true);
  await expectToExist(await _Healthcare.healthcareTitleElem);
  await expectText(await _Healthcare.healthcareTitleElem, HealthcareData.healthcareTitleText);
});

Then(/^find your product button for Dental\? is working$/, async () => {
  await expectToExist(await Page.dentalButtonFindYourProductElem);
  await expectText(await Page.dentalButtonFindYourProductTextElem, Data.dentalButtonFindYourProductText);
  await clickElement(await Page.dentalButtonFindYourProductElem, true);
});

Then(/^the Quizzard page is opened$/, async () => {
  await expectText(await _Quizzard.wizardCardTitleElem, QuizzardData.quizzardFirstQuestionHeaderText);
  await expectURL(urls.quiz);
});

Then(/^validate back button label and click it$/, async () => {
  await expectText(await _Quizzard.quizzardBackButtonText, QuizzardData.quizzardButtonText);
  await clickElement(await _Quizzard.quizzardBackButton, true);
});

Then(/^user should go back to Dental page$/, async () => {
  await expectText(await Page.dentalTitleElem, Data.dentalTitle);
  await expectURL(urls.healthcareProducts.dental, true);
});

Then(/^the title and description of What is Dental Insurance\? should be correct$/, async () => {
  await expectText(await Page.dentalOfferTitleElem, Data.dentalOfferTitle);
  await expectText(await Page.dentalOfferDescriptionElem, Data.dentalOfferDescription);
});

Then(/^who typically needs it most\? title should be correct$/, async () => {
  await expectText(await Page.dentalMainSubTitleElem, Data.dentalmainSubTitle);
});

Then(/^picture and description of offering for Families should be correct$/, async () => {
  await expectText(await Page.dentalFamiliesTitleElem, Data.dentalFamiliesTitle);
  await expectText(await Page.dentalFamiliesDescriptionElem, Data.dentalFamiliesDescription);
  await expectToExist(await Page.dentalFamiliesTitleImage);
  await expectAttributeToContain(await Page.dentalFamiliesTitleImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#People-Green");
});

Then(/^picture and description of offering for Older people plan should be correct$/, async () => {
  await expectText(await Page.dentalOlderPeopleTitleElem, Data.dentalOlderPeopleTitle);
  await expectText(await Page.dentalOlderPeopleDescriptionElem, Data.dentalOlderPeopleDescription);
  await expectToExist(await Page.dentalOlderPeopleTitleImage);
  await expectAttributeToContain(await Page.dentalOlderPeopleTitleImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dragonfly-Green");
});

Then(/picture and description of offering for Dental issues plan should be correct$/, async () => {
  await expectText(await Page.dentalDentalIssuesTitleElem, Data.dentalIssuesTitle);
  await expectText(await Page.dentalIssuesDescriptionElem, Data.dentalIssuesDescription);
  await expectToExist(await Page.dentalIssuesTitleImage);
  await expectAttributeToContain(await Page.dentalIssuesTitleImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
});

Then(/^the title and description of start quiz section should be correct$/, async () => {
  await expectToExist(await Page.dentalStartQuizTitleImage);
  await expectText(await Page.dentalStartQuizDescriptionElem, Data.dentalStartQuizDescription);
  await expectText(await Page.dentalStartQuizTitleElem, Data.dentalStartQuizlTitle);
});

Then(/^get started button text should be correct$/, async () => {
  await expectToExist(await Page.dentalButtonStartQuizElem);
  await expectText(await Page.dentalButtonStartQuizTextElem, Data.dentalButtonStartQuizText);
});

Then(/^find get started button is working$/, async () => {
  await clickElement(await Page.dentalButtonStartQuizElem, true);
});

Then(/^Quizzard page should be opened$/, async () => {
  await expectText(await _Quizzard.wizardCardTitleElem, QuizzardData.quizzardFirstQuestionHeaderText);
  await expectURL(urls.quiz);
});

Then(/^the title and description of brighter card should be correct$/, async () => {
  await expectText(await Page.dentalBrighterCardTitleElem, Data.dentalBrighterCardTitle);
  await expectText(await Page.dentalBrighterCardDescriptionElem, Data.dentalBrighterCardDescription);
});

Then(/^the brighter card has icons$/, async () => {
  await expectToExist(await Page.dentalBrighterCardDentalGreenIcon);
  await expectAttributeToContain(await Page.dentalBrighterCardDentalGreenIcon, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
  await expectToExist(await Page.dentalBrighterCardVideoIcon);
  await expectAttributeToContain(await Page.dentalBrighterCardVideoIcon, "xlink:href", "/brighter-assets/icons/green_icons.svg#Video-Green");
});

Then(/^the brighter card has a picture$/, async () => {
  await expectToExist(await Page.dentalBrighterCardImg);
  await expectAttributeToContain(await Page.dentalBrighterCardImg, "src", "/assets/images/video/video_dental.jpg");
});

