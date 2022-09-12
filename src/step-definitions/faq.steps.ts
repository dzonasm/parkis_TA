import { DataTable, Then, When } from "@cucumber/cucumber";
import { Context } from "../helpers/context";
import Faq from "../page-objects/faq.page";
import { FaqData } from "../data/faq.data";
import urls from "../data/urls"; 
import { clickElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist } from "../helpers/validators";

const Page: Faq = Context.getInstance().getPage('Faq');

Then(/^the Faq title, header and description should be correct$/, async () => {
  await expectToExist(Page.faqMainHeadlineTitleElem);
  await expectText(Page.faqMainHeadlineTitleElem, FaqData.faqMainHeadlineTitleText);
  await expectToExist(Page.faqMainContentHeaderElem);
  await expectText(Page.faqMainContentHeaderElem, FaqData.faqMainContentHeaderText);
  await expectToExist(Page.faqMainContentDescElem);
  await expectText(Page.faqMainContentDescElem, FaqData.faqMainContentDescText);
});

Then(/^user checks that accordion item \((\d+)\) has correct icons, title and status$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  const accordionItem = await Page.getAccordionItemDetails(nth);
  await expectAttributeToContain(accordionItem.image, "xlink:href", faqAccordionItemDataTable.CardIcon);
  await expectAttributeToContain(accordionItem.icon, "xlink:href", faqAccordionItemDataTable.ExpansionIcon);
  await expectText(accordionItem.title, faqAccordionItemDataTable.Title);
  await expectAttributeToContain(accordionItem.item, "aria-expanded", faqAccordionItemDataTable.Status);
});

When(/^the user clicks on the accordion item \((\d+)\)$/, async (nth) => {
  const accordionItem = await Page.getAccordionItemDetails(nth);
  await clickElement(accordionItem.item, true);
});

Then(/^accordion item \((\d+)\) is expanded and correct icon, status and description is displayed$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  const accordionItem = await Page.getAccordionItemDetails(nth);
  await expectAttributeToContain(accordionItem.icon, "xlink:href", faqAccordionItemDataTable.ExpansionIcon);
  await expectText(accordionItem.description, faqAccordionItemDataTable.Description);
  await expectAttributeToContain(accordionItem.item, "aria-expanded", faqAccordionItemDataTable.Status);
});

Then(/^the user clicks on accordion item \((\d+)\) again and it should be closed and icon changed$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  const accordionItem = await Page.getAccordionItemDetails(nth);
  await clickElement(accordionItem.item, true);
  await expectAttributeToContain(accordionItem.icon, "xlink:href", faqAccordionItemDataTable.ExpansionIcon);
  await expectAttributeToContain(accordionItem.item, "aria-expanded", faqAccordionItemDataTable.Status);
});
