import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import Dental from '../page-objects/dental.page';
import Quizzard from '../page-objects/quizzard.page';
import Offerings from '../page-objects/offerings.page';
import Healthcare from '../page-objects/healthcare.page';
import { Data } from "../data/dental.data";
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

Then(/^the Dental title, description and picture should be correct$/, async () => {              
  await expectText(await Page.dentalTitleElem, Data.dentalTitle);
  await expectText(await Page.dentalDescriptionElem, Data.dentalDescription);
  await expectToExist(await Page.dentalHeaderTitleImage);
  await expectAttributeToContain(await Page.dentalHeaderTitleImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
});

Then(/^user can see breadcrumb Offerings link$/, async () => {
  await expectText(await Page.dentalOfferingsLinkTextElem, Data.dentalOfferingsLinkText);
  await expectAttributeToContain(await Page.dentalOfferingsHref, "href", "/client/indigo/offerings");
});

Then(/^user can see breadcrumb Healthcare link$/, async () => {
  await expectText(await Page.dentalHealtcareLinkTextElem, Data.dentalHealtcareLinkText);
  await expectAttributeToContain(await Page.dentalHealtcareHref, "href", "/client/indigo/offerings/606d91a9cf72104f54e0ddd9");
});

Then(/^user clicks on Offerings breadcrumb link$/, async () => {
  await clickElement(await Page.dentalOfferingsLinkTextElem, true);
});

Then(/^user is navigated to Offerings page$/, async () => {
  await expectToExist(await _Offerings.offeringsTitleElem);
});

Then(/user should return to Dental page$/, async () => {
  browser.back();
  await expectToExist(await Page.dentalHeaderTitleImage);
  await expectURL(urls.healthcareProducts.dental, true);
});

Then(/^user clicks on Healtcare breadcrumb link$/, async () => {
  await clickElement(await Page.dentalHealtcareLinkTextElem, true);
});

Then(/^user is navigated to Healtcare page/, async () => {
  await expectToExist(await _Healthcare.healthcareTitleElem);
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

Then(/^user clicks on back button$/, async () => {
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

Then(/^check the following data of offerings first column is correct$/, async (table) => {
  const dentalFirstColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalFamiliesTitleElem, dentalFirstColumnDataTable.Subtitle);
  await expectText(await Page.dentalFamiliesDescriptionElem, dentalFirstColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalFamiliesTitleImage, "xlink:href", dentalFirstColumnDataTable.Picture);
 });

Then(/^check the following data of offerings second column is correct$/, async (table) => {
  const dentalSecondColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalOlderPeopleTitleElem, dentalSecondColumnDataTable.Subtitle);
  await expectText(await Page.dentalOlderPeopleDescriptionElem, dentalSecondColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalOlderPeopleTitleImage, "xlink:href", dentalSecondColumnDataTable.Picture);
});

Then(/^check the following data of offerings third column is correct$/, async (table) => {
  const dentalThirdColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalDentalIssuesTitleElem, dentalThirdColumnDataTable.Subtitle);
  await expectText(await Page.dentalIssuesDescriptionElem, dentalThirdColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalIssuesTitleImage, "xlink:href", dentalThirdColumnDataTable.Picture);
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

