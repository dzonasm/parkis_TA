import urls from '../data/urls';
import { clickElement, getElement, getNthElement } from '../helpers/elements';
import { Page } from './page';

export default class dental extends Page {
  open() {
    return super.open(urls.healthcareProducts.dental);
  }

  get dentalHeaderTitleImage() {
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

  get dentalOfferingsHref() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a');
  }

  get dentalHealtcareHref() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a');
  }

  get dentalHealtcareLinkTextElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a > span');
  }

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

  get dentalBrighterCardTitleElem() {
    return getElement('[ta-id="offering-product_608648035"]');
  }

  get dentalBrighterCardDescriptionElem() {
    return getElement('[ta-id="sidebar_758035548"]');
  }

  get dentalBrighterCardDentalGreenIcon() {
    return getElement('mercer-app-offerings-sidebar > div > brighter-icon > svg > use');
  }

  get dentalBrighterCardVideoIcon() {
    return getElement('brighter-card-content > div.p-lead-flex.brighter-p-lead > brighter-icon > svg > use');
  }

  get dentalBrighterCardVideo() {
    return getElement('[ta-id="sidebar_998391898"]');
  }

  get dentalMainSubTitleElem() {
    return getElement('[ta-id="offering-product_342314838"]');
  }

  get dentalBrighterCardImg() {
    return getElement('[ta-id="sidebar_909911467"]');
  }
}
