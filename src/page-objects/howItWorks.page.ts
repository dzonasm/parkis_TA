import urls from '../data/urls';
import { getElement, getNthElement } from '../helpers/elements';

import { Page } from './page';

export default class works extends Page {
    open() {
        return super.open(urls.works);
    }
    get howItWorksHeaderTitleElem() {
        return getElement('[ta-id="how-it-works_781497897"]');
    }

    get howItWorksHeaderTitleDescElem() {
        return getElement('[ta-id="how-it-works_851030490"]');
    }

    get howItWorksHeaderStartButtonIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div.how-it-works__header.ng-star-inserted > div > div:nth-child(2) > div > brighter-icon > svg > use');
    }

    get howItWorksSubHeaderTitleElem() {
        return getElement('[ta-id="how-it-works_987574216"]');
    }

    get howItWorksSubHeaderDescElem() {
        return getElement('[ta-id="how-it-works_167268680"]');
    }

    get howItWorksSubHeaderImg() {
        return getElement('[ta-id="how-it-works_731418922"]');
    }

    get howItWorksMainContentTitleElem() {
        return getElement('[ta-id="how-it-works_534526354"]');
    }

    get howItWorksMainContentDescElem() {
        return getElement('[ta-id="how-it-works_529035000"]');
    }

    async howItWorksHeaderVideoElem(selector) {
        return getElement(selector)
    }

    async getOurOfferingsItemDetails(nth) {
        return {
            title: await getNthElement('[ta-id="how-it-works_546204597"]', nth),
            icon: await getNthElement('brighter-shape > div > brighter-icon > svg > use', nth),
        };
    }

    async getCardItemDetails(nth) {
        return {
            title: await getNthElement('[ta-id="eligibility-card_959657693"] brighter-card > div > div.brighter-card__content.ng-star-inserted > brighter-card-content > div.pt-sm-5.mos-u-equalizer > h1', nth),
            description: await getNthElement('[ta-id="eligibility-card_85433124"]', nth),
            picture: await getNthElement('[ta-id="eligibility-card_959657693"] brighter-card-header > div > img', nth),
            icon: await getNthElement('[ta-id="eligibility-card_959657693"] brighter-icon > svg > use', nth),
            buttonText: await getNthElement('[ta-id="eligibility-card_866260170"]', nth),
            button: await getNthElement('[ta-id="eligibility-card_924285199"]', nth),
        };
    }

    async getButtonText(nth) {
        return {
            buttonText: await getNthElement('[ta-id="eligibility-card_866260170"]', nth),
        };
    }

    async clickBtn(nth) {
        return {
            button: await getNthElement('[ta-id="eligibility-card_924285199"]', nth),
        };
    }
    

}