import { Data } from '../data/quizzard.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class quizzard extends Page {
  open() {
    return super.open(urls.quiz);
  }

  get quizzardFirstQuestionHeaderText() {
    return getElement('mercer-text-widget > div > h6');
  }

  get quizzardBackButton() {
    return getElement('[ta-id="widget_718917881"]');
  }

  get quizzardBackButtonText() {
    return getElement('[ta-id="widget_900165588"]');
  }

  get wizardCardTitleElem() {
    return getElement('.brand-typography-display-h6');
  }

  async validateUrl() {
    //await expectURL(urls.base.stage + urls.clients.indigo + urls.quiz, true);
    await expectURL(urls.quiz);
  }

  async validateQuizzardFirstQuestionHeaderText() {
    await expectText(this.quizzardFirstQuestionHeaderText, Data.quizzardFirstQuestionHeaderText);
  }

  async validateQuizzardBackButton() {
    await expectToExist(this.quizzardBackButton);
  } 

  async validateQuizzardBackButtonText() {
    await expectText(this.quizzardBackButtonText, Data.quizzardButtonText);
  }

  async clickBackButton() {
    await clickElement(this.quizzardBackButton, true);
  }

  async validateWizarCardTitle() {
    await expectText(this.wizardCardTitleElem, Data.wizardCardTitle);
  }
}
