import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import urls from "../data/urls";
import { expectAttributeToContain, expectText, expectToExist, expectURL } from "../helpers/validators";
import termsOfUse from "../page-objects/termsOfUse.page";
import { Data } from "../data/termsOfUse.data";
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';


const TermsOfUse: termsOfUse = Context.getInstance().getPage('termsOfUse');

When(/^the Terms Of Use page is opened$/, async () => {
    await expectToExist(TermsOfUse.termsOfUseMainContentTitleElem);
    await expectURL(urls.footerLinks.termsOfUse, true);
});

Then(/^Terms Of Use title is correct$/, async () => {
    await expectText(TermsOfUse.termsOfUseMainContentTitleElem, Data.termsOfUseMainContentTitleText);
});

Then(/^Icon next to Terms Of Use title is correct$/, async () => {
    await expectAttributeToContain(await TermsOfUse.termsOfUseMainContentIcon, "xlink:href", "/brighter-assets/icons/green_icons.svg#Clipboard-Green");
});

Then(/^date under Terms Of Use title is correct$/, async () => {
    await expectText(TermsOfUse.termsOfUseMainContentDate, Data.termsOfUseMainContentDateText);
});

Then(/^Terms Of Use content text is correct$/, async () => {
    await expectToExist(TermsOfUse.termsOfUseMainContentElem);
    const expectedContent = readFileSync(join(__dirname, '../data/termsOfUseContent-text.txt'), 'utf-8');
    await expectText(TermsOfUse.termsOfUseMainContentElem, expectedContent);
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    // console.log(await TermsOfUse.tekstas);
    // const tekstas = await TermsOfUse.termsOfUseMainContentElem;
    // writeFileSync(join(__dirname, "../data/termsOfUseContent-text.txt"), await tekstas.getText(), {
    //     flag: 'w',
    //   });

});