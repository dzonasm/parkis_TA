import { QuizzardData } from '../data/quizzard.data';
import urls from '../data/urls';
import { expectText, expectToExist, expectURL } from '../helpers/validators';
import { clickElement, getElement } from '../helpers/elements';

import { Page } from './page';


export default class quizzard extends Page {
  open() {
    return super.open(urls.quizLinks.Vision);
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

  get quizzardCardTitleElem() {
    return getElement('.brand-typography-display-h6');
  }

  async validateVisionUrl() {
    await expectURL(urls.quizLinks.Vision);
  }

  async validateQuizzardFirstQuestionHeaderText() {
    await expectText(this.quizzardFirstQuestionHeaderText, QuizzardData.quizzardFirstQuestionHeaderText);
  }

  async validateQuizzardBackButton() {
    await expectToExist(this.quizzardBackButton);
  }

  async validateQuizzardBackButtonText() {
    await expectText(this.quizzardBackButtonText, QuizzardData.quizzardButtonText);
  }

  async clickBackButton() {
    await clickElement(this.quizzardBackButton, true);
  }

  async validateQuizzardCardTitle() {
    await expectText(this.quizzardCardTitleElem, QuizzardData.quizzardFirstQuestionHeaderText);
  }
}
