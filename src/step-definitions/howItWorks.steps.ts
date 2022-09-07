import { Then, When } from '@cucumber/cucumber';
import { Context } from '../helpers/context';
import urls from "../data/urls";
import { clickElement, getElement, getNthElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist, expectURL, expectValue } from "../helpers/validators";
import Works from '../page-objects/works.page';

const _Works: Works = Context.getInstance().getPage('Works');

When(/^the How it works page is opened$/, async () => {
  await expectToExist(_Works.howItWorksHeaderTitleElem);
  await expectURL(urls.works, true);
});

Then(/^check the following data of the header is correct$/, async (table) => {
    const howItWorksHeaderDataTable = await table.rowsHash();
    await expectText(await _Works.howItWorksHeaderTitleElem, howItWorksHeaderDataTable.Title);
    await expectText(await _Works.howItWorksHeaderTitleDescElem, howItWorksHeaderDataTable.Description);
   });