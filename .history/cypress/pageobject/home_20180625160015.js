const {
    get,
    visit
} = cy;

class HomePage {

    get googleSearchButton() {
        return get("[name=btnK]");
    }
    get googleSearchField() {
        return get("[name=q]");
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