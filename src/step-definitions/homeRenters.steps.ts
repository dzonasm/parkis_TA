import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import homeRenters from '../page-objects/homeRenters.page';
import urls from "../data/urls";
import { clickElement, getElement, getNthElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL, expectValue } from "../helpers/validators";


const _homeRenters: homeRenters = Context.getInstance().getPage('homeRenters');


When(/^the quiz page is opened$/, async () => {
    await expectURL(urls.quizLinks.base, true);
});

Then(/^first card title subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizFirstCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizFirstCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizFirstCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^click on input wrapper$/, async () => {
    await clickElement(await _homeRenters.quizProfesionInputWrapper, true);
});

Then(/^select Drafters proffesion$/, async () => {
    await clickElement(await _homeRenters.quizProfesionInputDraftersOption, true);
});

Then(/^Click next button$/, async () => {
    await clickElement(await _homeRenters.quizNextBtn, true);
});

Then(/^ieskom$/, async () => {
    await expectToExist(await _homeRenters.ieskom);
});

  
