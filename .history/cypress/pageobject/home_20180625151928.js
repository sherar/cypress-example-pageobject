const {
    get,
    location
} = cy;
const baseUrl = Cypres.env("baseUrl");

class HomePag {
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
}