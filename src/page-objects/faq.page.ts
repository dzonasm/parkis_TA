import { FaqData } from '../data/faq.data';
import urls from '../data/urls';
import { getElement, getElements, getNthElement } from '../helpers/elements';

import { Page } from './page';

export default class faq extends Page {
    open() {
        return super.open(urls.faq);
    }

    async getAccordionItemsDetails(nth) {
        return {
            image: await getNthElement(FaqData.faqAccordionCardIconElementsID, nth),
            icon: await getNthElement(FaqData.faqAccordionExpansionIconElementsID, nth),
            title: await getNthElement(FaqData.faqAccordionTitleElementsID, nth),
            item: await getNthElement(FaqData.faqAccordionItemElementsID, nth),
        };
    }

    async getSingleAccordionItem(id, nth) {
        return getNthElement(id, nth);
    }

    async getElementByID(id) {
        return getElement(id);
    }
}