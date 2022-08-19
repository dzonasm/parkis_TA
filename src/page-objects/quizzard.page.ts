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

  async validateUrl() {
    await expectURL(urls.quiz, true);
  }

  async validateWizardBackBtn() {
    await expectToExist(this.wizardBackBtn);
  } 

  async validateWizardBackBtnText() {
    await expectText(this.wizardBackBtn, Data.wizardButtonText);
  }

  async validateWizardBackBtnIsWorking() {
    await clickElement(this.wizardBackBtn, true);
  }
}
