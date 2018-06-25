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

    open() {
        visit("http://www.google.co.nz");
    }

    searchOnGoogle(text) {
        this.googleSearchField.type(text);
        this.googleSearchButton.click();
    }


}

export default new HomePage();