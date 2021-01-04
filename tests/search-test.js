let landingPage = require('../pages/LandingPage');
let resultPage = require('../pages/ResultPage');
let { readData } = require('../lib/excel_function');
browser.waitForAngularEnabled(false);

describe('Bing Search', function() {
    readData().forEach(test => {
        it(`Checking Tabs for Keyword - ${test['Data']}`, async function() {
            landingPage.get();
            let keyword = test['Data'];
            landingPage.search(keyword);
            resultPage.clickAndGetResult(keyword.toLocaleLowerCase())
            .then(texts => {
                let res = texts.flat().every(x => x.includes(keyword));
                test['Result'] = res ? 'PASS' : 'FAIL';
                console.log(test)
            });
        });
    })
    
  });