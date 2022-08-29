import urls from '../data/urls';
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
}
