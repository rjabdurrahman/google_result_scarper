let landingPage = require('../pages/LandingPage');
let resultPage = require('../pages/ResultPage');
let { readData, writeResult } = require('../lib/excel');
let ResultRow = require('../Models/ResultRow');
browser.waitForAngularEnabled(false);

describe('Bing Search', function() {
    let result = [];
    readData().forEach(test => {
        it(`Checking Tabs for Keyword - ${test['Data']}`, async function() {
            landingPage.get();
            let keyword = test['Data'];
            landingPage.search(keyword);
            resultPage.clickAndGetResult()
            .then(texts => {
                let res = texts.flat().every(x => x.toLowerCase().includes(keyword.toLowerCase()));
                result.push(new ResultRow('TC 1', 'Bangladesh', '1.1', 'Climate', 'PASS', 'FAIL'));
                writeResult(result);
                // console.log(result)
            });
        });
    });
});