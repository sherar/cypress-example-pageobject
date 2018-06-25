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

    searchOnGoogle(text) {
        this.googleSearchField.type(text);
        this.googleSearchButton.click();
    }

    open() {
        cy.visit(baseUrl);
    }
}

export default new HomePage();