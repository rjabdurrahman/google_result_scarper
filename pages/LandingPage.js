require('dotenv').config();
let { selectEl } = require('../lib/protractor');

function LandingPage() {
    let searchBox = by.name('q');

    this.get = function() {
        browser.driver.get(process.env.URL);
    }

    this.search = function(keyword) {
        selectEl(searchBox).sendKeys(keyword, protractor.Key.ENTER);
    }
}
module.exports = new LandingPage(); 