import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class homeRenters extends Page {
  open() {
    return super.open(urls.quizLinks.base);
  }

  get quizFirstCardTitleElem() {
    return getElement('mercer-text-widget > div > h6');
  }

  get quizFirstCardSubtitleElem() {
    return getElement('mercer-text-widget > div > p');
  }

  get quizFirstCardIcon() {
    return getElement('mercer-image-widget > brighter-icon > svg > use');
  }

  get quizProfesionInputWrapper() {
    return getElement('[ta-id="widget_442634283"]');
  }

  get quizProfesionInputDraftersOption() {
    return getElement('[id="brighter-option-12"]');
  }

  get quizNextBtn() {
    return getElement('mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button');
  }

  get ieskok() {
    return getElement('[ta-id="widget_4426342833"]');
  }

  get quizSecondCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet:nth-child(1) > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }
 
  get quizSecondCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet:nth-child(1) > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizSecondCardOptionNo() {
    return getElement('#brighter-radio-button-3 > label');
  }

  get quizSecondCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet:nth-child(1) > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button');
  }

  get quizThirdCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizThirdCardSubtitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-text-widget > div > p');
  }

  get quizThirdCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizThirdCardOptionNo() {
    return getElement('#brighter-radio-button-6 > label');
  }

  get quizThirdCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  
}
