import urls from '../data/urls';
import { getElement } from '../helpers/elements';

import { Page } from './page';

export default class healthcare extends Page {
    open() {
        return super.open(urls.offerings.healthcare);
    }

    get healthcareTitleElem() {
        return getElement('[ta-id="offering-header_581809928"]');
    }
}