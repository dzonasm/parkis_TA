import { Data } from '../data/dental.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class dental extends Page {
  open() {
    return super.open(urls.healthcareProducts.dental);
  }

  get dentalMainTitleImage() {
    return getElement('mercer-app-offering-header brighter-icon > svg > use');
  }

  get dentalTitleElem() {
    return getElement('[ta-id="offering-header_581809928"]');
  }

  get dentalDescriptionElem() {
    return getElement('.brighter-p-large');
  }

  async validateUrl() {
    await expectURL(urls.healthcareProducts.dental, true);
  }

  async validateDentalTitle() {
    await expectText(this.dentalTitleElem, Data.dentalTitle);
  }

  async validateDentalDescription() {
    await expectText(this.dentalDescriptionElem, Data.dentalDescription);
  }

  async validateDentalTitleImg() {
    await expectToExist(this.dentalMainTitleImage);
  }
}
