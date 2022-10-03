import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement, getNthElement } from '../helpers/elements';
import { QuizzardData } from '../data/quizzard.data';

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
    return getElement('#brighter-radio-button-3 > label > div:nth-child(1)');
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

  get quizFourthCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizFourthCardSubtitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-text-widget > div > p');
  }

  get quizFourthCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizDateOfBirthElem() {
    return getElement('[ta-id="widget_906619754"]');
  }

  get quizStateOfResidenceElem() {
    return getElement('[ta-id="widget_818787412"]');
  }

  get quizZipCodeElem() {
    return getElement('[ta-id="widget_325023439"]');
  }
  
  get quizStateOfResidenceInputUtOption() {
    return getElement('[id="brighter-option-107"]');
  }

  get quizAdditionalDetailsNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }
  
  get quizPlanForProductNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet:nth-child(2) > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet:nth-child(1) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get quizFifthCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet:nth-child(2) > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet:nth-child(2) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizFifthCardSubtitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet:nth-child(2) > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet:nth-child(2) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet:nth-child(1) > mercer-text-widget > div > p');
  }

  get quizFifthCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet:nth-child(2) > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizSixthCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizSixthCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizFirstNameElem() {
    return getElement('[ta-id="widget_325023439"]');
  }

  get quizLastNameElem() {
    return getElement('#txe59wG-v');
  }

  get quizEmailElem() {
    return getElement('#' + '\\' + '37 EmMjaadf');
  }

  get quizGenderElem() {
    return getElement('#QWWWr61iV > div > div.brighter-select__value');
  }

  get quizGenderMaleOption() {
    return getNthElement('#cdk-overlay-2 [ta-id="widget_887461453"]',0);
  }

  get quizMaritalStatusElem() {
    return getElement('#bFKeMyIYW > div > div.brighter-select__value');
  }

  get quizMaritalStatusSingleOption() {
    return getNthElement('#cdk-overlay-3 > div > div [ta-id="widget_887461453"]', 0);
  }

  get quizAboutYouNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet:nth-child(1) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }
  
  get quizSeventhCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizSeventhCardSubtitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-text-widget > div > p');
  }

  get quizSeventhCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }
  
  get quizSeventhCardOptionNo() {
    return getNthElement('[ta-id="widget_870612363"] [ta-id="widget_217741585"]', 1);
  }
  
  get quizDoYouUseTobaccoNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get quizEighthCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizEighthCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizEighthCardOptionRarely() {
    return getNthElement('[ta-id="widget_870612363"] [ta-id="widget_163813541"]', 0);
  }

  get quizEighthCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get quizNinethCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quizNinethCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quizNinethCardOptionLowerPremium() {
    return getNthElement('[ta-id="widget_870612363"] [ta-id="widget_217741585"]', 0);
  }

  get quizNinethCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get quiz10thCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quiz10thCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quiz10thCardOptionLowerPremium() {
    return getNthElement('[ta-id="widget_870612363"] [ta-id="widget_163813541"]', 0);
  }

  get quiz10thCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get quiz11thCardTitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(2) > mercer-text-widget > div > h6');
  }

  get quiz11thCardSubtitleElem() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(3) > mercer-text-widget > div > p');
  }

  get quiz11thCardIcon() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__content > mason-slot > mason-block-outlet:nth-child(1) > mercer-image-widget > brighter-icon > svg > use');
  }

  get quiz11thCardOptionNo() {
    return getNthElement('[ta-id="widget_870612363"] [ta-id="widget_217741585"]', 1);
  }

  get quiz11thCardNextBtn() {
    return getElement('body > mercer-app > mercer-app-page-container > main > mercer-mapp-submit-request-dynamic > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > mercer-card-widget > mason-slot > mason-block-outlet > ng-component > div > div > div > div.gig-c-menu-page__footer > mason-slot > mason-block-outlet > mercer-mason-row > div > div.column.mos-u-text-right.ng-star-inserted > mason-slot > mason-block-outlet:nth-child(1) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet:nth-child(1) > mercer-dynamic-block-widget > mason-slot > mason-block-outlet > mercer-button-widget > button > div');
  }

  get loginTitle() {
    return getElement('[ta-id="login_485597688"]')
  }

}
