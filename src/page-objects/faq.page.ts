import { FaqData } from '../data/faq.data';
import urls from '../data/urls';
import { getElement, getElements, getNthElement } from '../helpers/elements';

import { Page } from './page';

export default class faq extends Page {
    open() {
        return super.open(urls.faq);
    }

    get faqMainHeadlineTitleElem() {
        return getElement('[ta-id="faq_161669206"]');
    }

    get faqMainContentHeaderElem() {
        return getElement('[ta-id="faq_409356808"]');
    }

    get faqMainContentDescElem() {
        return getElement('[ta-id="faq_146432569"]');
    }

    async getAccordionItemDetails(nth) {
        return {
            image: await getNthElement('div.brighter-accordion-item__header__content > brighter-icon > svg > use' ,nth),
            icon: await getNthElement('div.brighter-accordion-item__toggle.ng-star-inserted > brighter-accordion-item-toggle > brighter-icon > svg > use', nth),
            title: await getNthElement('[ta-id="faq_201393979"]', nth),
            description: await getNthElement('[ta-id="faq_166895400"]', nth),
            item: await getNthElement('[ta-id="faq_217190828"]', nth),
        };
    }
}