import { LoginPage } from '../pages/loginPage';

export class Helper extends LoginPage {
    clickLogin() {
            cy.server()
                .route('**/profile**')
                .as('dataLoaded');

            this.clickLoginButton();

            cy.wait('@dataLoaded')
                .its('status')
                .should('be', 200);
        }
}
