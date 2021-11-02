/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Authorize
       * @example cy.login()
       * @example cy.login({ email: string, password: string })
      */
      login(params?: { email: string, password: string }): Chainable<Element>
    }
  }
