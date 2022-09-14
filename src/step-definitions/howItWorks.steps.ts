import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import urls from "../data/urls";
import { clickElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL } from "../helpers/validators";
import Works from '../page-objects/howItWorks.page';
import Quizzard from '../page-objects/quizzard.page';
import { QuizzardData } from '../data/quizzard.data';

const _Works: Works = Context.getInstance().getPage('Works');
const _Quizzard: Quizzard = Context.getInstance().getPage('Quizzard');

When(/^the How it works page is opened$/, async () => {
  await expectToExist(_Works.howItWorksHeaderTitleElem);
  await expectURL(urls.works, true);
});

Then(/^check the following data of the header is correct$/, async (table) => {
    const howItWorksHeaderDataTable = await table.rowsHash();
    await expectToExist(await _Works.howItWorksHeaderVideoElem(howItWorksHeaderDataTable.Video));
    await expectText(await _Works.howItWorksHeaderTitleElem, howItWorksHeaderDataTable.Title);
    await expectText(await _Works.howItWorksHeaderTitleDescElem, howItWorksHeaderDataTable.Description);
    await expectAttributeToContain(await _Works.howItWorksHeaderStartButtonIcon, "xlink:href", howItWorksHeaderDataTable.StartButtonIcon);
});

Then(/^check the following data of the sub-header is correct$/, async (table) => {
  const howItWorksSubHeaderDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksSubHeaderTitleElem, howItWorksSubHeaderDataTable.Title);
  await expectText(await _Works.howItWorksSubHeaderDescElem, howItWorksSubHeaderDataTable.Description);
  await expectAttributeToContain(await _Works.howItWorksSubHeaderImg, "src", howItWorksSubHeaderDataTable.Picture);
});

Then(/^main content title and description should be correct$/, async (table) => {
  const howItWorksMainContentDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentTitleElem, howItWorksMainContentDataTable.Title);
  await expectText(await _Works.howItWorksMainContentDescElem, howItWorksMainContentDataTable.Description);
});

Then(/^check the following data of main content \((\d+)\) card is correct$/, async (nth, table) => {
  const howItWorksMainContentFifthCardDataTable = await table.rowsHash();
  const ourOfferingsItem = await _Works.getOurOfferingsItemDetails(nth);
  await expectText(ourOfferingsItem.title, howItWorksMainContentFifthCardDataTable.Subtitle);
  await expectAttributeToContain(ourOfferingsItem.icon, "xlink:href", howItWorksMainContentFifthCardDataTable.Icon);
});

Then(/^check the following data of main content who is eligble section \((\d+)\) card is correct$/, async (nth, table) => {
  const howItWorksMainContentEligibleSectionFirstCardDataTable = await table.rowsHash();
  const cardItem = await _Works.getCardItemDetails(nth);
  await expectText(cardItem.title, howItWorksMainContentEligibleSectionFirstCardDataTable.Title);
  await expectText(cardItem.description, howItWorksMainContentEligibleSectionFirstCardDataTable.Description);
  await expectAttributeToContain(cardItem.picture, "src", howItWorksMainContentEligibleSectionFirstCardDataTable.Picture);
   await expectAttributeToContain(cardItem.icon, "xlink:href", howItWorksMainContentEligibleSectionFirstCardDataTable.ArrowRightIcon);
});

Then(/^check main content who is eligible section \((\d+)\) card button text is correct$/, async (nth, table) => {
  const howItWorksMainContentEligibleSectionFirstCardButtonDataTable = await table.rowsHash();
  const cardItem = await _Works.getCardItemDetails(nth);
  await expectText(cardItem.buttonText, howItWorksMainContentEligibleSectionFirstCardButtonDataTable.ButtonText);
});

Then(/^in eligible section \((\d+)\) card user clicks on Learn more button$/, async (nth) => {
  const cardItem = await _Works.getCardItemDetails(nth);
  await clickElement(cardItem.button, true);
});

Then(/^user from \((\d+)\) card is navigated to Quizzard page$/, async (nth) => {
  await expectText(await _Quizzard.quizzardCardTitleElem, QuizzardData.quizzardFirstQuestionHeaderText);
  await expectURL(urls.quizLinks.base);
});




