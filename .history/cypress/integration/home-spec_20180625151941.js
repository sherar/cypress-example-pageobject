context('Window', () => {
    beforeEach(() => {
        cy.visit('http://www.google.co.nz')
    })

    it('Google page is sucessfully displayed', () => {
        cy.get('[name=btnK]').should('be.visible');
    })

    it("")
})