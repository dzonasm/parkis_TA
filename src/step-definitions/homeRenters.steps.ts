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
//1
Then(/^what type of work do you do\? card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizFirstCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizFirstCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizFirstCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^click on input wrapper field$/, async () => {
    await clickElement(await _homeRenters.quizProfesionInputWrapper, true);
});

Then(/^select Drafters proffesion$/, async () => {
    await clickElement(await _homeRenters.quizProfesionInputDraftersOption, true);
});

Then(/^in what type of work do you do\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quizNextBtn, true);
});
//2
Then(/^do you own your own business\? card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizSecondCardTitleElem, homeRentersDataTable.Title);
    await expectAttributeToContain(await _homeRenters.quizSecondCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in do you own your own business\? card choose option no$/, async () => {
    await clickElement(await _homeRenters.quizSecondCardOptionNo, true);
});

Then(/^in do you own your own business\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quizSecondCardNextBtn, true);
});

//3
Then(/^home owner card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizThirdCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizThirdCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizThirdCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in home owner card choose option no$/, async () => {
    await clickElement(await _homeRenters.quizThirdCardOptionNo, true);
});

Then(/^in home owner card click next button$/, async () => {
    await clickElement(await _homeRenters.quizThirdCardNextBtn, true);
});

Then(/^ieskok$/, async () => {
    await expectToExist(await _homeRenters.ieskok);
});
