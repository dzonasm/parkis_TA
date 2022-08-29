import urls from '../data/urls';
import { clickElement, getElement } from '../helpers/elements';
import { Page } from './page';

export default class offerings extends Page {
  open() {
    return super.open(urls.offerings.base);
  }

  get offeringsTitleElem() {
    return getElement('[ta-id="offering-categories_650222342"]');
  }
}