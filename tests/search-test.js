let landingPage = require('../pages/LandingPage');
let resultPage = require('../pages/ResultPage');
let { readData, writeResult } = require('../lib/excel');
let ResultRow = require('../Models/ResultRow');
let  retest = require('./retest');
browser.waitForAngularEnabled(false);

describe('Bing Search', function() {
    let result = [];
    readData().forEach((test, testNo) => {
        it(`Checking Tabs for Keyword - ${test['Data']}`, async function() {
            landingPage.get();
            let keyword = test['Data'];
            landingPage.search(keyword);
            resultPage.clickAndGetResult()
            .then(btnsAndTexts => {
                for(let i = 0; i < btnsAndTexts.length; i += 2) {
                    let res = btnsAndTexts[i + 1].flat().every(x => x.toLowerCase().includes(keyword.toLowerCase())) ? 'PASS' : 'FAIL';
                    if(i == 0)
                        result.push(new ResultRow('TC 1', keyword, `${testNo + 1}.${(i/2) + 1}`, btnsAndTexts[i], res, ''));
                    else result.push(new ResultRow('', '', `${testNo + 1}.${(i/2) + 1}`, btnsAndTexts[i], res, ''));
                }
                writeResult(result);
                let failedRows = result.filter((item, index) => {
                    item['failedInfo'] = {
                        failedBtnNo : parseInt(item['No'].split('.')[1]),
                        rowNo : index
                    }
                    return item['Result'] == 'FAIL' && parseInt(item['No'].split('.')[0]) == testNo + 1;
                });
                if(failedRows) retest(keyword, failedRows);
            });
        });
    });
});