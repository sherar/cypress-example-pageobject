const {
    get
} = cy;

const baseUrl = Cypress.env("baseUrl");

class HomePage {

    get googleSearchButton() {
        cy.get("[name=btnK");
    }
    get googleSearchField() {
        cy.get("[name=q]");
    }

    open() {
        cy.visit(this.baseUrl);
    }

    searchOnGoogle(text) {
        this.googleSearchField.type(text);
        this.googleSearchButton.click();
    }
}

export default new HomePage();