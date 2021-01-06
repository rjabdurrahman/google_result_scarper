let XLSX = require('xlsx');
let fs = require('fs');
let workbook = XLSX.readFile('Test_Cases.xlsx');
let sheet_name_list = workbook.SheetNames;

function readData() {
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

function writeResult(res) {
    let newWb = XLSX.utils.book_new();
    let newWs = XLSX.utils.json_to_sheet(res);
    XLSX.utils.book_append_sheet(newWb, newWs);
    XLSX.writeFile(newWb, "Test_Cases_Res.xlsx");
    // fs.unlink('Test_Cases.xlsx', (err) => {
    //     if (err) {
    //         throw err;
    //     }
    // });    
}

module.exports = { readData, writeResult }