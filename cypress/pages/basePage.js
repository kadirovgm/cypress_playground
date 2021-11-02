export class BasePage {
    timeToWait = 30000;

    getByCustomId(value) {
        return cy.get(`[${"id"}=${value}]`, { timeout: this.timeToWait });
    }

    getByCustomCss(value) {
        return cy.get(value, { timeout: this.timeToWait });
    }
}
