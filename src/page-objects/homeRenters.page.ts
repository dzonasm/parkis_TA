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

  get ieskom() {
    return getElement('[ta-id="widget_4426342833"]');
  }

 
  
}
