import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import urls from "../data/urls";
import { clickElement, getElement, getElementText, getNthElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL, expectValue, expectToContain } from "../helpers/validators";
import Works from '../page-objects/works.page';

const _Works: Works = Context.getInstance().getPage('Works');

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

Then(/^check the following data of main content first card is correct$/, async (table) => {
  const howItWorksMainContentFirstCardDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentFirstCardSubtileElem, howItWorksMainContentFirstCardDataTable.Subtitle);
  await expectAttributeToContain(await _Works.howItWorksMainContentFirstCardIcon, "xlink:href", howItWorksMainContentFirstCardDataTable.Icon);
});

Then(/^check the following data of main content second card is correct$/, async (table) => {
  const howItWorksMainContentSecondCardDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentSecondCardSubtileElem, howItWorksMainContentSecondCardDataTable.Subtitle);
  await expectAttributeToContain(await _Works.howItWorksMainContentSecondCardIcon, "xlink:href", howItWorksMainContentSecondCardDataTable.Icon);
});

Then(/^check the following data of main content third card is correct$/, async (table) => {
  const howItWorksMainContentThirdCardDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentThirdCardSubtileElem, howItWorksMainContentThirdCardDataTable.Subtitle);
  await expectAttributeToContain(await _Works.howItWorksMainContentThirdCardIcon, "xlink:href", howItWorksMainContentThirdCardDataTable.Icon);
});

Then(/^check the following data of main content fourth card is correct$/, async (table) => {
  const howItWorksMainContentFourthCardDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentFourthCardSubtileElem, howItWorksMainContentFourthCardDataTable.Subtitle);
  await expectAttributeToContain(await _Works.howItWorksMainContentFourthCardIcon, "xlink:href", howItWorksMainContentFourthCardDataTable.Icon);
});

Then(/^check the following data of main content fifth card is correct$/, async (table) => {
  const howItWorksMainContentFifthCardDataTable = await table.rowsHash();
  await expectText(await _Works.howItWorksMainContentFifthCardSubtileElem, howItWorksMainContentFifthCardDataTable.Subtitle);
  await expectAttributeToContain(await _Works.howItWorksMainContentFifthCardIcon, "xlink:href", howItWorksMainContentFifthCardDataTable.Icon);
});


