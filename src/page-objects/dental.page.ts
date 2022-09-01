import urls from '../data/urls';
import { clickElement, getElement, getNthElement } from '../helpers/elements';
import { Page } from './page';

export default class dental extends Page {
  open() {
    return super.open(urls.healthcareProducts.dental);
  }

  get dentalMainHeaderImgElem() {
    return getElement('mercer-app-offering-header brighter-icon > svg > use');
  }

  get dentalMainHeaderTitleElem() {
    return getElement('[ta-id="offering-header_581809928"]');
  }

  get dentalMainHeaderDescElem() {
    return getElement('.brighter-p-large');
  }
  
  get dentalMainContentTitleElem() {
    return getElement('[ta-id="offering-product_353375929"]');
  }

  get dentalMainContentDescElem() {
    return getElement('[ta-id="offering-product_558789510"]');
  }

  get dentalMainHeaderBtnFindYourProductElem() {
    return getElement('[ta-id="offering-header_844302377"]');
  }

  get dentalMainHeaderbtnFindYourProductTextElem() {
    return getElement('[ta-id="offering-header_393197785"]');
  }

  get dentalMainHeaderBreadcrumbOfferingsTextElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a > span');
  }

  get dentalMainHeaderBreadcrumbOfferingsHredElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(1) > span > a');
  }

  get dentalMainHeaderBreadcrumbHealthcareHrefElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a');
  }

  get dentalMainHeaderBreadcrumbHealthcareTextElem() {
    return getElement('mercer-breadcrumb-nav > div > div:nth-child(2) > span > a > span');
  }

  get dentalMainContentFirstColumnTitleElem() {
    return getElement('[ta-id="offering-product_760549029"]');
  }

  get dentalMainContentFirstColumnDescElem() {
    return getElement('[ta-id="offering-product_540480608"]');
  }

  get dentalMainContentFirstColumnImgElem() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 0);
  }

  get dentalMainContentSecondColumnTitleElem() {
    return getElement('[ta-id="offering-product_46326510"]');
  }

  get dentalMainContentSecondColumnDescElem() {
    return getElement('[ta-id="offering-product_21256170"]');
  }

  get dentalMainContentSecondColumnImgElem() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 1);
  }

  get dentalMainContentThirdColumnTitleTextElem() {
    return getElement('[ta-id="offering-product_846690178"]');
  }

  get dentalMainContentThirdColumnDescElem() {
    return getElement('[ta-id="offering-product_245331089"]');
  }

  get dentalMainContentThirdColumnImgElem() {
    return getNthElement('[ta-id="offering-product_896582148"] brighter-icon > svg > use', 2);
  }

  get dentalMainSidebarTitleElem() {
    return getElement('[ta-id="offering-product_608648035"]');
  }

  get dentalMainSidebarFirstDescElem() {
    return getElement('[ta-id="sidebar_758035548"]');
  }
  get dentalMainSidebarSecondDescElem() {
    return getElement('[ta-id="sidebar_53616545"]');
  }

  get dentalMainSidebarGreenIconElem() {
    return getElement('mercer-app-offerings-sidebar > div > brighter-icon > svg > use');
  }

  get dentalMainSidebarVideoElemn() {
    return getElement('brighter-card-content > div.p-lead-flex.brighter-p-lead > brighter-icon > svg > use');
  }

  get dentalMainContentSubTitleElem() {
    return getElement('[ta-id="offering-product_342314838"]');
  }

  get dentalMainSidebarImg() {
    return getElement('[ta-id="sidebar_909911467"]');
  }
}
