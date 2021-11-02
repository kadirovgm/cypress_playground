import { BasePage } from './basePage';


export class LoginPage extends BasePage {

    goToLoginPage() {
        cy.visit(Cypress.env('baseUrl') + "/login");
        this.loginTitle;
    }

    get loginTitle() {
        return this.getByCustomCss('.ant-card .ant-card-head-title');
    }

    get emailInput() {
        return this.getByCustomId('email');
    }

    get passwordInput() {
        return this.getByCustomId('password');
    }

    get loginButton() {
        return this.getByCustomCss('.ant-card .ant-form-item-control-input-content .ant-btn');
    }

    get errors() {
        return this.getByCustomCss('.ant-card .ant-form-item-explain');
    }

    clickLoginButton() {
        this.loginButton.click();
    }
}
