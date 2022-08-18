import { Data } from '../data/vision.data';
import urls from '../data/urls';
import { getElement } from '../helpers/elements';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { Page } from './page';


export default class Vision extends Page {
  open() {
    return super.open(urls.healthcareProducts.vision);
  }

  get visionHeaderImageElem() {
    return getElement('mercer-app-offering-header brighter-icon > svg > use');
  }

  get visionTitleElem() {
    return getElement('[ta-id="offering-header_581809928"]');
  }

  get visionDescriptionElem() {
    return getElement('.brighter-p-large');
  }

  async validateUrl() {
    await expectURL(urls.healthcareProducts.vision, true);
  }

  async validateVisionTitle() {
    await expectText(this.visionTitleElem, Data.visionTitle);
  }

  async validateVisionDescription() {
    await expectText(this.visionDescriptionElem, Data.visionHeaderDescription);
  }

  async validateVisionImage() {
    await expectToExist(this.visionHeaderImageElem);
  }
}
