import { Then, When } from "@cucumber/cucumber";
import { Context } from "../helpers/context";
import PrivacyPolicy from "../page-objects/privacyPolicy.page";
import { PrivacyPolicyData } from "../data/privacyPolicy.data";
import urls from '../data/urls';
import { expectText, expectToExist, expectURL, expectAttributeToContain } from "../helpers/validators";
import { getElementText } from "../helpers/elements";
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

const Page: PrivacyPolicy = Context.getInstance().getPage('PrivacyPolicy');

When(/^the Privacy Policy page is opened$/, async () => {
    await expectURL(urls.footerLinks.privacyPolicy, true);
});

Then(/^Privacy Policy title is correct$/, async () => {
    await expectToExist(Page.privacyMainContentTitleElem);
    await expectText(Page.privacyMainContentTitleElem, PrivacyPolicyData.privacyMainContentTitleText);
});

Then(/^icon next to Privacy Policy title is correct$/, async () => {
    await expectToExist(Page.privacyMainContentEffectiveDateElem);
    await expectText(Page.privacyMainContentEffectiveDateElem, PrivacyPolicyData.privacyMainContentEffectiveDateText);
});

Then(/^date under Privacy Policy title is correct$/, async () => {
    await expectToExist(Page.privacyMainContentImageElem);
    await expectAttributeToContain(Page.privacyMainContentImageElem, "xlink:href", PrivacyPolicyData.privacyMainContentImage);
});

Then(/^Privacy Policy content text is correct$/, async () => {
    await expectToExist(Page.privacyMainContentElem);
    const expectedContent = readFileSync(join(__dirname, '../data/privacyPolicyMainContentText.txt'), 'utf-8');
    await expectText(Page.privacyMainContentElem, expectedContent);
});