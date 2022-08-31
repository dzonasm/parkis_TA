import { Data } from '../data/dental.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement, getNthElement } from '../helpers/elements';

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
  
  get dentalOfferTitleElem() {
    return getElement('[ta-id="offering-product_353375929"]');
  }

  get dentalOfferDescriptionElem() {
    return getElement('[ta-id="offering-product_558789510"]');
  }

  get dentalButtonFindYourProductElem() {
    return getElement('[ta-id="offering-header_844302377"]');
  }

  get dentalButtonFindYourProductTextElem() {
    return getElement('[ta-id="offering-header_393197785"]');
  }

  get dentalOfferingsLinkElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a');
  }

  //And who typically needs it most? title, pictures and descriptions for Dental should be displayed
  get dentalFamiliesTitleElem() {
    return getElement('[ta-id="offering-product_760549029"]');
  }

  get dentalFamiliesDescriptionElem() {
    return getElement('[ta-id="offering-product_540480608"]');
  }

  get dentalFamiliesTitleImage() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 0);
  }
  
  async validateUrl() {
    await expectURL(urls.healthcareProducts.dental, true);
  }

  async validateWizardUrl() {
    await expectURL(urls.quiz, true);
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
  
  async validateDentalOfferTitle() {
    await expectText(this.dentalOfferTitleElem, Data.dentalOfferTitle);
  }

  async validateDentalOfferrDescription() {
    await expectText(this.dentalOfferDescriptionElem, Data.dentalOfferDescription);
    await console.log(this.dentalOfferDescriptionElem);
  }

  async validateDentalButtonFindYourProductElem() {
    await expectToExist(this.dentalButtonFindYourProductElem);
  }
  
  async validateDentalButtonFindYourProductTextElem() {
    await expectText(this.dentalButtonFindYourProductTextElem, Data.dentalButtonFindYourProductText);
  }

  async validateDentalButtonIsWorking() {
    await clickElement(this.dentalButtonFindYourProductElem, true);
  }

  //And who typically needs it most? title, pictures and descriptions for Dental should be displayed
  async validateDentalFamiliesTitle() {
    await expectText(this.dentalFamiliesTitleElem, Data.dentalFamiliesTitle);
  }

  async validateDentalFamiliesDescription() {
    await expectText(this.dentalFamiliesDescriptionElem, Data.dentalFamiliesDescription);
  }

  async validateDentalFamiliesTitleImg() {
    await expectToExist(this.dentalFamiliesTitleImage);
  }

  async validateDentalOfferingsLinkElem() {
    await expectText(this.dentalOfferingsLinkElem, Data.dentalOfferingsLinkText);
  }

  async validateDentalOfferingsLinkIsWorking() {
    await clickElement(this.dentalOfferingsLinkElem, true);
  }

}
