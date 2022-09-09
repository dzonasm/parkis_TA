import urls from '../data/urls';
import { getElement, getElementText, getNthElement } from '../helpers/elements';

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

    get howItWorksMainContentFirstCardSubtileElem() {
        return getElement('mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(1) > p');
    }

    // get howItWorksMainContentFirstCardIcon() {
    //     return getNthElement('[ta-id="how-it-works_534363016"] brighter-icon > svg > use', 0);
    // }

    get howItWorksMainContentFirstCardIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(1) > brighter-shape > div > brighter-icon > svg > use');
    }

    get howItWorksMainContentSecondCardSubtileElem() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(2) > p');
    }

    get howItWorksMainContentSecondCardIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(2) > brighter-shape > div > brighter-icon > svg > use');
    }

    get howItWorksMainContentThirdCardSubtileElem() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(3) > p');
    }

    get howItWorksMainContentThirdCardIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(3) > brighter-shape > div > brighter-icon > svg > use');
    }

    get howItWorksMainContentFourthCardSubtileElem() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(4) > p');
    }

    get howItWorksMainContentFourthCardIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(4) > brighter-shape > div > brighter-icon > svg > use');
    }

    get howItWorksMainContentFifthCardSubtileElem() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(5) > p');
    }

    get howItWorksMainContentFifthCardIcon() {
        return getElement('body > mercer-app > mercer-app-page-container > main > mercer-app-how-it-works > div > div:nth-child(3) > div > div.mos-u-color-bg--white.p-sm-5.md-p-md-3 > div:nth-child(3) > div > div > div > div:nth-child(5) > brighter-shape > div > brighter-icon > svg > use');
    }

    async howItWorksHeaderVideoElem(selector) {
        return getElement(selector)
    }

}