/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        login(email: string, password: string): void;

        // 04-creation-command-solution
        /*addToCart(): Cypress.Chainable<Subject>;*/

        // 06-networking-solution
        /*interceptHomePage(): Cypress.Chainable<Subject>;
        interceptBooksByGenre(): Cypress.Chainable<Subject>;*/
    }

}