import { Then, When } from "@cucumber/cucumber";
import { Context } from "../helpers/context";
import Faq from "../page-objects/faq.page";
import { FaqData } from "../data/faq.data";
import { clickElement } from "../helpers/elements";
import { expectAttributeToContain, expectText, expectToExist } from "../helpers/validators";
import { mapFAQSections } from "../interfaces/faq.seqtions.interface";

const Page: Faq = Context.getInstance().getPage('Faq');

Then(/^the \((\w+)\) exists and is correct$/, async (elem) => {
  await expectToExist(Page.getElementByID(mapFAQSections(elem).id));
  await expectText(Page.getElementByID(mapFAQSections(elem).id), mapFAQSections(elem).text);
});

Then(/^user checks that accordion item \((\d+)\) has correct icons, title and status$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  const accordionItem = await Page.getAccordionItemsDetails(nth);
  await expectAttributeToContain(accordionItem.image, "xlink:href", FaqData.faqAccordionCardIconNamingAddon + faqAccordionItemDataTable.CardIcon);
  await expectAttributeToContain(accordionItem.icon, "xlink:href", FaqData.faqAccordionExpansionIconNamingAddon + faqAccordionItemDataTable.ExpansionIcon);
  await expectText(accordionItem.title, faqAccordionItemDataTable.Title);
  await expectAttributeToContain(accordionItem.item, "aria-expanded", faqAccordionItemDataTable.Status);
});

When(/^the user clicks on the accordion item \((\d+)\)$/, async (nth) => {
  await clickElement(await Page.getSingleAccordionItem(FaqData.faqAccordionItemElementsID, nth), true);
});

Then(/^accordion item \((\d+)\) is expanded and correct icon, status and description is displayed$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  await expectAttributeToContain(await Page.getSingleAccordionItem(FaqData.faqAccordionExpansionIconElementsID, nth), "xlink:href", FaqData.faqAccordionExpansionIconNamingAddon + faqAccordionItemDataTable.ExpansionIcon);
  await expectText(await Page.getSingleAccordionItem(FaqData.faqAccordionDescElementsID, nth), faqAccordionItemDataTable.Description);
  await expectAttributeToContain(await Page.getSingleAccordionItem(FaqData.faqAccordionItemElementsID, nth), "aria-expanded", faqAccordionItemDataTable.Status);
});

Then(/^the user clicks on accordion item \((\d+)\) again and it should be closed and icon changed$/, async (nth, table) => {
  const faqAccordionItemDataTable = await table.rowsHash();
  await clickElement(await Page.getSingleAccordionItem(FaqData.faqAccordionItemElementsID, nth), true);
  await expectAttributeToContain(await Page.getSingleAccordionItem(FaqData.faqAccordionExpansionIconElementsID, nth), "xlink:href", FaqData.faqAccordionExpansionIconNamingAddon + faqAccordionItemDataTable.ExpansionIcon);
  await expectAttributeToContain(await Page.getSingleAccordionItem(FaqData.faqAccordionItemElementsID, nth), "aria-expanded", faqAccordionItemDataTable.Status);
});
