import { Data } from '../data/vision.data';
import urls from '../data/urls';
import { clickElement, getElement } from '../helpers/elements';
import { expectText, expectToExist, expectURL } from '../helpers/validators';

import { Page } from './page';


export default class Vision extends Page {
  open() {
    return super.open(urls.healthcareProducts.vision);
  }

  get visionHeaderImageElem() {
    return getElement('mercer-app-offering-header brighter-icon > svg > use');
  }

  get visionOfferingsLinkInBreadcrumb() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a > span');
  }

  get visionHealthcareLinkInBreadcrumb() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a > span');
  }

  get visionTitleElem() {
    return getElement('[ta-id="offering-header_581809928"]');
  }

  get visionDescriptionElem() {
    return getElement('.brighter-p-large');
  }

  get visionFindYourProductButton() {
    return getElement('[ta-id="offering-header_393197785"]');
  }

  get visionParHeaderElem() {
    return getElement('[ta-id="offering-product_353375929"]');
  }

  get visionParTextElem() {
    return getElement('[ta-id="offering-product_558789590"]');
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

  async validateVisionParHeader() {
    await expectText(this.visionParHeaderElem, Data.visionPararagraphHeader);
  }

  async validateVisionParText() {
    await expectText(this.visionParTextElem, Data.visionParagraphText);
  }

  async validateOfferingsLinkBreacrumbText() {
    await expectText(this.visionOfferingsLinkInBreadcrumb, Data.visionOfferingsLinkBreadcrumbText);
  }

  async validateHealthcareLinkBreacrumbText() {
    await expectText(this.visionHealthcareLinkInBreadcrumb, Data.visionHealthcareLinkBreadcrumbText);
  }

  async clickOfferingsLinkOnBreadcrumb() {
    await clickElement(this.visionOfferingsLinkInBreadcrumb, true);
  }

  async clickHealthcareLinkOnBreadcrumb() {
    await clickElement(this.visionHealthcareLinkInBreadcrumb, true);
  }

  async validateFindYourProductButtonText() {
    await expectText(this.visionFindYourProductButton ,Data.visionButtonFindYourProductText);
  }

  async clickFindYourProductButton() {
    await clickElement(this.visionFindYourProductButton, true);
  }
}
