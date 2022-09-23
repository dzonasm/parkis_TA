import urls from '../data/urls';
import { getElement, getElementText } from '../helpers/elements';
import { Page } from './page';

export default class PrivacyPolicy extends Page {
    open() {
        return super.open(urls.footerLinks.privacyPolicy);
    }

    get privacyMainContentTitleElem() {
        return getElement('[ta-id="privacy-policy_29561602"]');
    }

    get privacyMainContentEffectiveDateElem() {
        return getElement('[ta-id="privacy-policy_43650855"]');
    }

    get privacyMainContentImageElem() {
        return getElement('div.column.shrink > brighter-icon > svg > use');
    }

    get privacyMainContentElem() {
        return getElement('[ta-id="privacy-policy_248153112"]');
    }
}