const {
    get
} = cy;

class HomePage {

    get googleSearchButton() {
        get("[name=btnK]");
    }
    get googleSearchField() {
        get("[name=q]");
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