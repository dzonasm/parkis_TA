import urls from '../data/urls';
import { getElement, getElementText } from '../helpers/elements';

import { Page } from './page';

export default class termsOfUse extends Page {
    open() {
        return super.open(urls.footerLinks.termsOfUse);
    }

    get termsOfUseMainContentTitleElem() {
        return getElement('[ta-id="terms-of-use_771962981"]');
    }
   
    get termsOfUseMainContentIcon() {
        return getElement('mercer-app-terms-of-use > div > div > div > div > div.row > div.column.shrink > brighter-icon > svg > use');
      }

    get termsOfUseMainContentDate(){
        return getElement('[ta-id="terms-of-use_266143761"]');
    } 

    get termsOfUseMainContentElem () {
        return getElement('[ta-id="terms-of-use_167470060"]');
    }
}