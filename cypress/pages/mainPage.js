import { BasePage } from './basePage';


export class Page extends BasePage {

    goToMainPage() {
            cy.visit(Cypress.env('baseUrl'));
            this.getByCustomId('root')
        }
}
