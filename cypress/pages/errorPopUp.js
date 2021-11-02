import { BasePage } from './basePage';


export class ErrorPopUp extends BasePage {

    get errorPopUpMessage() {
        return this.getByCustomCss('.ant-message-notice');
    }


}
