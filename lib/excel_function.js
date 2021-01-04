var XLSX = require('xlsx');
let workbook = XLSX.readFile('Test_Cases.xlsx');
let sheet_name_list = workbook.SheetNames;

function readData() {
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

function writeResult(res) {
    console.log(res)
}

module.exports = { readData }
// Update Data
// let sheet_data = readData(workbook.Sheets[sheet_name_list[0]])
// sheet_data[0]['Result'] = 'TRUE';
// sheet_data[1]['Result'] = 'FALSE';
// console.log(sheet_data)