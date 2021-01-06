function ResultPage() {
    let EC = protractor.ExpectedConditions;
    this.resultHeadings = by.css('li>h2,li>div>div>h2');
    this.resultPageButtons = by.css('.ent-dtab-content a');
    
    this.clickAndGetResult = async function() {
        let btns = element.all(this.resultPageButtons);
        return await btns.count().then(count => {
            count -= 1;
            let allResultPromise = [];
            for(i = 0; i < count; i++) {
                // browser.wait(EC.elementToBeClickable(btns.get(i)), 5000);
                allResultPromise.push(btns.get(i).getText());
                btns.get(i).click();
                allResultPromise.push(this.getResult())
            }
            return Promise.all(allResultPromise)
        })
    }
    
    this.getResult = async function() {
        let resItems = element.all(this.resultHeadings);
        return await resItems.map(el => el.getText())
    }

    this.failedBtnResult = function(failedRows, keyword) {
        let btns = element.all(this.resultPageButtons);
        let allRetestResultPromise = [];
        for(let fi of failedRows) {
            btns.get(fi.failedInfo.failedBtnNo - 1).click();
            allRetestResultPromise.push(Promise.resolve({rowNo: fi.failedInfo.rowNo, keyword}));
            allRetestResultPromise.push(this.getResult())
        }
        return Promise.all(allRetestResultPromise)
    }
}

module.exports = new ResultPage(); 