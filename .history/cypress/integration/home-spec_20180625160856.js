import homePage from "../pageobject/home";

context("Window", () => {
    beforeEach(() => {
        //cy.visit("http://www.google.co.nz")
        homePage.open();
    })

    it("Google page is sucessfully displayed", () => {
        cy.get("[name=btnK]").should("be.visible");
    })

    it("Search something on Google using PO model", () => {
        homePage.searchOnGoogle("cats");
        cy.get("#sbfrm_l #resultStats").should('be.visible');
        cy.get("#sbfrm_l #resultStats").contains(/^About .* results+/);
    })
})