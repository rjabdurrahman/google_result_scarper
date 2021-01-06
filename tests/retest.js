const { search } = require('../pages/LandingPage');
let landingPage = require('../pages/LandingPage');
let resultPage = require('../pages/ResultPage');
function retest(keyword, failedRows) {
    landingPage.get();
    landingPage.search(keyword);
    resultPage.failedBtnResult(failedRows);
}
module.exports = retest;