require('dotenv').config();
let { selectEl } = require('../lib/protractor');

function LandingPage() {
    this.searchBox = by.name('q');

    this.get = function() {
        browser.driver.get(process.env.URL);
    }

    this.search = function(keyword) {
        selectEl(this.searchBox).sendKeys(keyword, protractor.Key.ENTER);
    }
}

module.exports = new LandingPage(); 