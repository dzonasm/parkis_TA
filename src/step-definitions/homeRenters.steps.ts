import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import homeRenters from '../page-objects/homeRenters.page';
import urls from "../data/urls";
import { clickElement, getElement, getNthElement, writeToElement } from "../helpers/elements";
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
Then(/^do you own your own business\? card title and icon should be correct$/, async (table) => {
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
//4

Then(/^a few additional details card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizFourthCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizFourthCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizFourthCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^fill date of birth input field$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await writeToElement(await _homeRenters.quizDateOfBirthElem, homeRentersDataTable.Date);
});

Then(/^click on state of residence input field$/, async () => {
    await clickElement(await _homeRenters.quizStateOfResidenceElem, true);
});

Then(/^select UT in state of residence input field$/, async () => {
    await clickElement(await _homeRenters.quizStateOfResidenceInputUtOption, true);
});

Then(/^fill zip code input field$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await writeToElement(await _homeRenters.quizZipCodeElem, homeRentersDataTable.ZipCode);
});

Then(/^in a few additional details card click next button$/, async () => {
    await clickElement(await _homeRenters.quizAdditionalDetailsNextBtn, true);
});

Then(/^now let's find your perfect plan for each selected product card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizFifthCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizFifthCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizFifthCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in now let's find your perfect plan for each selected product card click next button$/, async () => {
    await clickElement(await _homeRenters.quizPlanForProductNextBtn, true);
});

Then(/^about you card title and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizSixthCardTitleElem, homeRentersDataTable.Title);
    await expectAttributeToContain(await _homeRenters.quizSixthCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^fill first name input field$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await writeToElement(await _homeRenters.quizFirstNameElem, homeRentersDataTable.FirstName);
});

Then(/^fill last name input field$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await writeToElement(await _homeRenters.quizLastNameElem, homeRentersDataTable.LastName);
});

Then(/^fill email input field$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await writeToElement(await _homeRenters.quizEmailElem, homeRentersDataTable.Email);
});

Then(/^click on gender input field$/, async () => {
    await clickElement(await _homeRenters.quizGenderElem, true);
});

Then(/^select male gender in gender input field$/, async () => {
    await clickElement(await _homeRenters.quizGenderMaleOption, true);
});

Then(/^click on marital status input field$/, async () => {
    await clickElement(await _homeRenters.quizMaritalStatusElem, true);
});

Then(/^select single in marital status input field$/, async () => {
    await clickElement(await _homeRenters.quizMaritalStatusSingleOption, true);
});

Then(/^in about you card click next button$/, async () => {
    await clickElement(await _homeRenters.quizAboutYouNextBtn, true);
});

Then(/^do you use tobacco or nicotine products\? card title, subtitle and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizSeventhCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quizSeventhCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quizSeventhCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in do you use tobacco or nicotine products\? card choose option no$/, async () => {
    await clickElement(await _homeRenters.quizSeventhCardOptionNo, true);
});

Then(/^in do you use tobacco or nicotine products\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quizDoYouUseTobaccoNextBtn, true);
});

Then(/^in a year, how often will you visit the doctor and\/or fill a prescription\? card title and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizEighthCardTitleElem, homeRentersDataTable.Title);
    await expectAttributeToContain(await _homeRenters.quizEighthCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in a year, how often will you visit the doctor and\/or fill a prescription\? card choose rarely option$/, async () => {
    await clickElement(await _homeRenters.quizEighthCardOptionRarely, true);
});

Then(/^in a year, how often will you visit the doctor and\/or fill a prescription\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quizEighthCardNextBtn, true);
});

Then(/^in what options do you prefer in a medical plan\? card title and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quizNinethCardTitleElem, homeRentersDataTable.Title);
    await expectAttributeToContain(await _homeRenters.quizNinethCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in what options do you prefer in a medical plan\? card choose lower premium option$/, async () => {
    await clickElement(await _homeRenters.quizNinethCardOptionLowerPremium, true);
});

Then(/^in what options do you prefer in a medical plan\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quizNinethCardNextBtn, true);
});

Then(/^in select your vision preference card title and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quiz10thCardTitleElem, homeRentersDataTable.Title);
    await expectAttributeToContain(await _homeRenters.quiz10thCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in select your vision preference card choose glasses option$/, async () => {
    await clickElement(await _homeRenters.quiz10thCardOptionLowerPremium, true);
});

Then(/^in select your vision preference card click next button$/, async () => {
    await clickElement(await _homeRenters.quiz10thCardNextBtn, true);
});

Then(/^in do you have a dependent\? card title and icon should be correct$/, async (table) => {
    const homeRentersDataTable = await table.rowsHash();
    await expectText(await _homeRenters.quiz11thCardTitleElem, homeRentersDataTable.Title);
    await expectText(await _homeRenters.quiz11thCardSubtitleElem, homeRentersDataTable.Subtitle);
    await expectAttributeToContain(await _homeRenters.quiz11thCardIcon, "xlink:href", homeRentersDataTable.Icon);
});

Then(/^in do you have a dependent\? card choose option no$/, async () => {
    await clickElement(await _homeRenters.quiz11thCardOptionNo, true);
});

Then(/^in do you have a dependent\? card click next button$/, async () => {
    await clickElement(await _homeRenters.quiz11thCardNextBtn, true);
});

Then(/^the user is on login page$/, async () => {
    await expectToExist(await _homeRenters.loginTitle);
    await expectURL(urls.login, true);
});

