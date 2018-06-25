const {
    get,
    location
} = cy;

const baseUrl = Cypres.env("baseUrl");

class HomePage {

    get googleSearchButton() {
        cy.get("[name=btnK");
    }
    get googleSearchField() {
        cy.get("[name=q]");
    }

    open() {
        cy.visit(baseUrl);
    }

    searchOnGoogle(text) {
        this.googleSearchField.type(text);
        this.googleSearchButton.click();
    }
}