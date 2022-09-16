import { VisionData } from '../data/vision.data';
import urls from '../data/urls';
import { clickElement, getElement, getElementText } from '../helpers/elements';
import { expectAttributeToContain, expectText, expectToExist, expectURL } from '../helpers/validators';

import { Page } from './page';


export default class vision extends Page {
  open() {
    return super.open(urls.healthcareProducts.vision);
  }

  get visionMainHeaderBreadcrumbOfferingsLinkElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a > span');
  }

  get visiomMainHeaderBreadcrumbHealthcareLinkElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a > span');
  }

  get visionMainHeaderVisionInsuranceTextElem() {
    return getElement('div.mos-u-display--inline.mos-c-breadcrumb__last.ng-star-inserted > span');
  }

  get visionMainHeaderBreadcrumbFirstArrowIconElem() {
    return getElement('div:nth-child(1) > span > mercer-icon > svg > use');
  }

  get visionMainHeaderBreadcrumbSecondArrowIconElem() {
    return getElement('div:nth-child(2) > span > mercer-icon > svg > use');
  }

  get visionMainHeaderImgElem() {
    return getElement('mercer-app-offering-header brighter-icon > svg > use');
  }

  get visionMainHeaderTitleElem() {
    return getElement('[ta-id="offering-header_581809928"]');
  }

  get visionMainHeaderDescElem() {
    return getElement('.brighter-p-large');
  }

  get visionMainHeaderBtnFindYourProductElem() {
    return getElement('[ta-id="offering-header_393197785"]');
  }

  get visionMainContentHeaderElem() {
    return getElement('[ta-id="offering-product_353375929"]');
  }

  get visionMainContentDescElem() {
    return getElement('[ta-id="offering-product_558789590"]');
  }

  get visionMainSidebarTitleElem() {
    return getElement('[ta-id="offering-product_608648035"]');
  }

  get visionMainSidebarFirstSubheaderDescElem() {
    return getElement('mercer-app-offerings-sidebar > div > div:nth-child(1)');
  }

  get visionMainSidebarSecondSubheaderDescElem() {
    return getElement('mercer-app-offerings-sidebar > div > div:nth-child(3)');
  }

  get visionMainSidebarImg() {
    return getElement('mercer-app-offerings-sidebar > div > brighter-icon > svg > use');
  }

  async validateUrl() {
    await expectURL(urls.healthcareProducts.vision, true);
  }
}
