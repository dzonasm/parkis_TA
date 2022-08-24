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

  get dentalButtonStartQuizElem() {
    return getElement('[ta-id="start-quiz_989449855"]');
  }

  get dentalButtonStartQuizTextElem() {
    return getElement('[ta-id="start-quiz_797357212"]');
  }

  get dentalOfferingsLinkTextElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a > span');
  }

  get dentalHealtcareLinkTextElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a > span');
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

  get dentalOlderPeopleTitleElem() {
    return getElement('[ta-id="offering-product_46326510"]');
  }

  get dentalOlderPeopleDescriptionElem() {
    return getElement('[ta-id="offering-product_21256170"]');
  }

  get dentalOlderPeopleTitleImage() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 1);
  }

  get dentalDentalIssuesTitleElem() {
    return getElement('[ta-id="offering-product_846690178"]');
  }

  get dentalIssuesDescriptionElem() {
    return getElement('[ta-id="offering-product_245331089"]');
  }

  get dentalIssuesTitleImage() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 2);
  }

  get dentalStartQuizTitleImage() {
    return getElement('mercer-app-start-quiz > div > div > div.get-started__card__content.pt-md-2.lg-pb-lg-1.pb-md-2.lg-pt-lg-1.pl-sm-2.pr-sm-2 > div > div > div:nth-child(1) > brighter-icon > svg > use');
  }

  get dentalStartQuizTitleElem() {
    return getElement('[ta-id="start-quiz_194757426"]');
  }

  get dentalStartQuizDescriptionElem() {
    return getElement('[ta-id="start-quiz_171906089"]');
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

  async validateDentalFamiliesTitle() {
    await expectText(this.dentalFamiliesTitleElem, Data.dentalFamiliesTitle);
  }
  
  async validateDentalFamiliesDescription() {
    await expectText(this.dentalFamiliesDescriptionElem, Data.dentalFamiliesDescription);
  }
  
  async validateDentalFamiliesTitleImg() {
    await expectToExist(this.dentalFamiliesTitleImage);
  }

  async validateOlderPeopleTitle() {
    await expectText(this.dentalOlderPeopleTitleElem, Data.dentalOlderPeopleTitle);
  }

  async validateOlderPeopleDescription() {
    await expectText(this.dentalOlderPeopleDescriptionElem, Data.dentalOlderPeopleDescription);
  }

  async validateOlderPeopleTitleImg() {
    await expectToExist(this.dentalOlderPeopleTitleImage);
  }

  async validateDentalIssuesTitle() {
    await expectText(this.dentalDentalIssuesTitleElem, Data.dentalIssuesTitle);
  }

  async validateDentalIssuesDescription() {
    await expectText(this.dentalIssuesDescriptionElem, Data.dentalIssuesDescription);
  }

  async validateDentalIssuesTitleImg() {
    await expectToExist(this.dentalIssuesTitleImage);
  }

  async validateDentalOfferingsLinkText() {
    await expectText(this.dentalOfferingsLinkTextElem, Data.dentalOfferingsLinkText);
  }
  
  async validateDentalHealtcareLinkText() {
    await expectText(this.dentalHealtcareLinkTextElem, Data.dentalHealtcareLinkText);
  }
  
  async clickDentalOfferingsLink() {
    await clickElement(this.dentalOfferingsLinkTextElem, true);
  }

  async clickDentalHealtcareLink() {
    await clickElement(this.dentalHealtcareLinkTextElem, true);
  }
  
  async validateStartQuizlTitle() {
    await expectText(this.dentalStartQuizTitleElem, Data.dentalStartQuizlTitle);
  }

  async validateStartQuizDescription() {
    await expectText(this.dentalStartQuizDescriptionElem, Data.dentalStartQuizDescription);
  }

  async validateStartQuizTitleImg() {
    await expectToExist(this.dentalStartQuizTitleImage);
  }

  async validateDentalButtonStartQuizElem() {
    await expectToExist(this.dentalButtonStartQuizElem);
  }
  
  async validateDentalButtonStartQuizTextElem() {
    await expectText(this.dentalButtonStartQuizTextElem, Data.dentalButtonStartQuizText);
  }

  async validateDentalButtonStartQuizIsWorking() {
    await clickElement(this.dentalButtonStartQuizElem, true);
  }
}
