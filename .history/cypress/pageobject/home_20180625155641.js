class HomePage {

    get googleSearchButton() {
        cy.get("[name=btnK]");
    }
    get googleSearchField() {
        cy.get("[name=q]");
    }

    searchOnGoogle(text) {
        this.googleSearchField.type(text);
        this.googleSearchButton.click();
    }

    open() {
        cy.visit("http://www.google.co.nz");
    }
}

export default new HomePage();