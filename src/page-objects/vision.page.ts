import { Data } from '../data/vision.data';
import urls from '../data/urls';
import { clickElement, getElement, getElementText } from '../helpers/elements';
import { expectAttributeToContain, expectText, expectToExist, expectURL } from '../helpers/validators';

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

  get visionVisionInsuranceText() {
    return getElement('div.mos-u-display--inline.mos-c-breadcrumb__last.ng-star-inserted > span');
  }

  get visionBreadcrumbFirstIcon() {
    return getElement('div:nth-child(1) > span > mercer-icon > svg > use');
  }

  get visionBreadcrumbSecondIcon() {
    return getElement('div:nth-child(2) > span > mercer-icon > svg > use');
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

  get visionSidebarTitleElem() {
    return getElement('[ta-id="offering-product_608648035"]');
  }

  get visionSidebarFirstSubheaderElem() {
    return getElement('mercer-app-offerings-sidebar > div > div:nth-child(1)');
  }

  get visionSidebarFirstSubheaderElemText() {
    return getElementText('mercer-app-offerings-sidebar > div > div:nth-child(1)');
  }

  get visionSidebarSecondSubheaderElem() {
    return getElement('mercer-app-offerings-sidebar > div > div:nth-child(3)');
  }

  get visionSidebarSecondSubheaderElemText() {
    return getElementText('mercer-app-offerings-sidebar > div > div:nth-child(3)');
  }

  get visionSidebarImage() {
    return getElement('mercer-app-offerings-sidebar > div > brighter-icon > svg > use');
  }

  async validateUrl() {
    await expectURL(urls.healthcareProducts.vision, true);
  }

  async validateVisionTitleText() {
    await expectText(this.visionTitleElem, Data.visionTitle);
  }

  async validateVisionTitleElem() {
    await expectToExist(this.visionTitleElem);
  }

  async validateVisionDescription() {
    await expectText(this.visionDescriptionElem, Data.visionHeaderDescription);
  }

  async validateVisionHeaderImage() {
    await expectToExist(this.visionHeaderImageElem);
  }

  async validateCorrectVisionHeaderImageIsDisplayed() {
    await expectAttributeToContain(this.visionHeaderImageElem, "xlink:href", "/brighter-assets/icons/green_icons.svg#Glasses-Green")
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

  async validateVisionInsuranceBreadcrumbText() {
    await expectText(this.visionVisionInsuranceText, Data.visionVisionInsuranceBreadcrumbText);
  }

  async clickOfferingsLinkOnBreadcrumb() {
    await clickElement(this.visionOfferingsLinkInBreadcrumb, true);
  }

  async clickHealthcareLinkOnBreadcrumb() {
    await clickElement(this.visionHealthcareLinkInBreadcrumb, true);
  }
  
  async validateVisionBreadcrumbFirstIcon() {
    await expectToExist(this.visionBreadcrumbFirstIcon);
  }

  async validateVisionBreadcrumbSecondIcon() {
    await expectToExist(this.visionBreadcrumbSecondIcon);
  }

  async validateCorrectVisionBreadcrumbIconIsDisplayed(icon) {
    await expectAttributeToContain(icon, "xlink:href", "#mos-icon-keyboard_arrow_right")
  }

  async validateFindYourProductButtonText() {
    await expectText(this.visionFindYourProductButton, Data.visionButtonFindYourProductText);
  }

  async clickFindYourProductButton() {
    await clickElement(this.visionFindYourProductButton, true);
  }

  async validateSidebarTitleElem() {
    await expectToExist(this.visionSidebarTitleElem);
  }

  async validateSidebarTitleText() {
    await expectText(this.visionSidebarTitleElem, Data.visionSidebarTitleText);
  }

  async validateSidebarFirstSubheaderText() {
    await expectText(this.visionSidebarFirstSubheaderElem, Data.visionSidebarFirstSubheaderText);
  }

  async validateSidebarSecondSubheaderText() {
    await expectText(this.visionSidebarSecondSubheaderElem, Data.visionSidebarSecondSubheaderText);
  }

  async validateSidebarImage() {
    await expectToExist(this.visionSidebarImage);
  }

  async validateCorrectSidebarImageIsDisplayed() {
    await expectAttributeToContain(this.visionSidebarImage, "xlink:href", "/brighter-assets/icons/green_icons.svg#Glasses-Green")
  }
}
