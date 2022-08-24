import { Data } from '../data/healthcare.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { getElement } from '../helpers/elements';

import { Page } from './page';

export default class healthcare extends Page {
    open() {
        return super.open(urls.offerings.healthcare);
    }

    get healthcareTitleElem() {
        return getElement('[ta-id="offering-header_581809928"]');
    }

    async validateUrl() {
        return expectURL(urls.offerings.healthcare, true);
    }

    async validateHealthcareTitle() {
        await expectToExist(this.healthcareTitleElem);
    }

    async validateHealthcareTitleText() {
        await expectText(this.healthcareTitleElem, Data.healthcareTitleText);
    }
}