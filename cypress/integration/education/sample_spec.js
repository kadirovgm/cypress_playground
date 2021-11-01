describe ('My First Test', function(){
    it('Click an element', function(){
        cy.visit('https://example.cypress.io') // open url
        cy.contains('type').click() // click on 'typo'
        cy.url().should('include', '/commands/actions') // now url have this fields 

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

describe ('My second Test', function(){
    it('smth', function(){

    })
})