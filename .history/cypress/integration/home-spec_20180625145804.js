context('Window', () => {
    beforeEach(() => {
        cy.visit('http://google.co.nz')
    })

    it('Google page is sucessfully displayed', () => {
        cy.window().should('have.property', 'top')
    })

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'Kitchen Sink')
    })
})