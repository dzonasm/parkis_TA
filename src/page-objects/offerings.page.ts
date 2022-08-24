import { Data } from '../data/offerings.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class offerings extends Page {
  open() {
    return super.open(urls.offerings.base);
  }

  get offeringsTitleElem() {
    return getElement('[ta-id="offering-categories_650222342"]');
  }

  async validateUrl() {
    await expectURL(urls.offerings.base, true);
  }

  async validateOfferingsTitle() {
    await expectToExist(this.offeringsTitleElem);
  }

  async validateOfferingsTitleText() {
    await expectText(this.offeringsTitleElem, Data.offeringsTitleText);
}

}