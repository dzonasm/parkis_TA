import { Data } from '../data/quizzard.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class quizzard extends Page {
  open() {
    return super.open(urls.quiz);
  }

  get wizardBackBtn() {
    return getElement('[ta-id="widget_718917881"]');
  }

  get wizardBackBtnText() {
    return getElement('[ta-id="widget_900165588"]');
  }

  get wizardCardTitleElem() {
    return getElement('.brand-typography-display-h6');
  }

  async validateUrl() {
    await expectURL(urls.quiz, true);
  }

  async validateWizardBackBtn() {
    await expectToExist(this.wizardBackBtn);
  } 

  async validateWizardBackBtnText() {
    await expectText(this.wizardBackBtnText, Data.wizardButtonText);
  }

  async clickBackBtn() {
    await clickElement(this.wizardBackBtn, true);
  }

  async validateWizarCardTitle() {
    await expectText(this.wizardCardTitleElem, Data.wizardCardTitle);
  }
}
