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
  await expectText(await Page.dentalMainHeaderTitleElem, Data.dentalMainHeaderTitleText);
  await expectText(await Page.dentalMainHeaderDescElem, Data.dentalMainHeaderDescText);
  await expectToExist(await Page.dentalMainHeaderImgElem);
  await expectAttributeToContain(await Page.dentalMainHeaderImgElem, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
});

Then(/^user can see breadcrumb Offerings link$/, async () => {
  await expectText(await Page.dentalMainHeaderBreadcrumbOfferingsTextElem, Data.dentalMainHeaderBreadcrumbOfferingsText);
  await expectAttributeToContain(await Page.dentalMainHeaderBreadcrumbOfferingsHredElem, "href", "/client/indigo/offerings");
});

Then(/^user can see breadcrumb Healthcare link$/, async () => {
  await expectText(await Page.dentalMainHeaderBreadcrumbHealthcareTextElem, Data.dentalMainHeaderBreadcrumbHealtcareTextt);
  await expectAttributeToContain(await Page.dentalMainHeaderBreadcrumbHealthcareHrefElem, "href", "/client/indigo/offerings/606d91a9cf72104f54e0ddd9");
});

Then(/^user clicks on Offerings breadcrumb link$/, async () => {
  await clickElement(await Page.dentalMainHeaderBreadcrumbOfferingsTextElem, true);
});

Then(/^user is navigated to Offerings page$/, async () => {
  await expectToExist(await _Offerings.offeringsTitleElem);
});

Then(/user should return to Dental page$/, async () => {
  browser.back();
  await expectToExist(await Page.dentalMainHeaderImgElem);
  await expectURL(urls.healthcareProducts.dental, true);
});

Then(/^user clicks on Healtcare breadcrumb link$/, async () => {
  await clickElement(await Page.dentalMainHeaderBreadcrumbHealthcareTextElem, true);
});

Then(/^user is navigated to Healtcare page/, async () => {
  await expectToExist(await _Healthcare.healthcareTitleElem);
});

Then(/^find your product button for Dental\? is working$/, async () => {
  await expectToExist(await Page.dentalMainHeaderBtnFindYourProductElem);
  await expectText(await Page.dentalMainHeaderbtnFindYourProductTextElem, Data.dentalMainHeaderBtnFindYourProductText);
  await clickElement(await Page.dentalMainHeaderBtnFindYourProductElem, true);
});

Then(/^the Quizzard page is opened$/, async () => {
  await expectText(await _Quizzard.quizzardCardTitleElem, QuizzardData.quizzardFirstQuestionHeaderText);
  await expectURL(urls.quiz);
});

Then(/^user clicks on back button$/, async () => {
  await expectText(await _Quizzard.quizzardBackButtonText, QuizzardData.quizzardButtonText);
  await clickElement(await _Quizzard.quizzardBackButton, true);
});

Then(/^user should go back to Dental page$/, async () => {
  await expectText(await Page.dentalMainHeaderTitleElem, Data.dentalMainHeaderTitleText);
  await expectURL(urls.healthcareProducts.dental, true);
});

Then(/^the title and description of What is Dental Insurance\? should be correct$/, async () => {
  await expectText(await Page.dentalMainContentTitleElem, Data.dentalMainContentHeaderText);
  await expectText(await Page.dentalMainContentDescElem, Data.dentalMainContentHeaderDescText);
});

Then(/^who typically needs it most\? title should be correct$/, async () => {
  await expectText(await Page.dentalMainContentSubTitleElem, Data.dentalMainContentSubtitleText);
});

Then(/^check the following data of offerings first column is correct$/, async (table) => {
  const dentalFirstColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalMainContentFirstColumnTitleElem, dentalFirstColumnDataTable.Subtitle);
  await expectText(await Page.dentalMainContentFirstColumnDescElem, dentalFirstColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalMainContentFirstColumnImgElem, "xlink:href", dentalFirstColumnDataTable.Picture);
 });

Then(/^check the following data of offerings second column is correct$/, async (table) => {
  const dentalSecondColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalMainContentSecondColumnTitleElem, dentalSecondColumnDataTable.Subtitle);
  await expectText(await Page.dentalMainContentSecondColumnDescElem, dentalSecondColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalMainContentSecondColumnImgElem, "xlink:href", dentalSecondColumnDataTable.Picture);
});

Then(/^check the following data of offerings third column is correct$/, async (table) => {
  const dentalThirdColumnDataTable = await table.rowsHash();
  await expectText(await Page.dentalMainContentThirdColumnTitleTextElem, dentalThirdColumnDataTable.Subtitle);
  await expectText(await Page.dentalMainContentThirdColumnDescElem, dentalThirdColumnDataTable.Description);
  await expectAttributeToContain(await Page.dentalMainContentThirdColumnImgElem, "xlink:href", dentalThirdColumnDataTable.Picture);
});

Then(/^the title and description of sidebar should be correct$/, async () => {
  await expectText(await Page.dentalMainSidebarTitleElem, Data.dentalMainSidebarTitleText);
  await expectText(await Page.dentalMainSidebarFirstDescElem, Data.dentalMainSidebarFirstSubheaderDescText);
  await expectText(await Page.dentalMainSidebarSecondDescElem, Data.dentalMainSidebarSecondSubheaderDescText);
});

Then(/^the sidebar has icons$/, async () => {
  await expectToExist(await Page.dentalMainSidebarGreenIconElem);
  await expectAttributeToContain(await Page.dentalMainSidebarGreenIconElem, "xlink:href", "/brighter-assets/icons/green_icons.svg#Dental-Green");
  await expectToExist(await Page.dentalMainSidebarVideoElemn);
  await expectAttributeToContain(await Page.dentalMainSidebarVideoElemn, "xlink:href", "/brighter-assets/icons/green_icons.svg#Video-Green");
});

Then(/^the sidebar has a picture$/, async () => {
  await expectToExist(await Page.dentalMainSidebarImg);
  await expectAttributeToContain(await Page.dentalMainSidebarImg, "src", "/assets/images/video/video_dental.jpg");
});

