/// <reference types="Cypress" />

import { LoginPage } from '../../pages/loginPage';
import { LeftToolBar } from '../../pages/leftToolBar';
import { ErrorPopUp } from '../../pages/errorPopUp';
import { Helper } from '../../support/helper';

describe('Log in', () => {
    let loginPage;
    let helper;
    let leftToolBar;
    let errorPopUp;

    beforeEach(() => {
            loginPage = new LoginPage();
            helper = new Helper();
            leftToolBar = new LeftToolBar;
            errorPopUp = new ErrorPopUp;
            loginPage.goToLoginPage();
        });

    it('empty credentials test', () => {
            loginPage.clickLoginButton();
            loginPage.errors.then( items => {
                expect(items[0]).to.contain.text('Please input your email!')
            });
            loginPage.errors.then( items => {
                expect(items[1]).to.contain.text('Please input your password!')
            });
        });

    it('incorrect credentials test', () => {
            var incorrectPassword = "123456";
            loginPage.emailInput.type(Cypress.env('baseUserLogin'))
                                .should('have.value', Cypress.env('baseUserLogin'));
            loginPage.passwordInput.type(incorrectPassword)
                                   .should('have.value', incorrectPassword);
            loginPage.clickLoginButton();
            errorPopUp.errorPopUpMessage.should('be.visible');
            errorPopUp.errorPopUpMessage.then( errorMessage => {
                    expect(errorMessage).to.contain.text('Invalid login or password. Please try again.')
                });
            });

    it('success login test', () => {
            loginPage.emailInput.should('have.attr', 'placeholder', 'Enter email')
            loginPage.emailInput.type(Cypress.env('baseUserLogin'))
                                .should('have.value', Cypress.env('baseUserLogin'));
            loginPage.passwordInput.type(Cypress.env('baseUserPassword'))
                                   .should('have.value', Cypress.env('baseUserPassword'));
            helper.clickLogin();
            leftToolBar.PoolSectionButton.should('be.visible');
        });
    });
