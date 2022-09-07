import urls from '../data/urls';
import { getElement } from '../helpers/elements';

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

}