"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeResult = exports.readData = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var xlsx_1 = __importDefault(require("xlsx"));
dotenv_1.default.config();
function readData(filePath) {
    var workbook = xlsx_1.default.readFile(filePath);
    var sheet_name_list = workbook.SheetNames;
    return xlsx_1.default.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}
exports.readData = readData;
function writeResult(fileName, res) {
    var newWb = xlsx_1.default.utils.book_new();
    var newWs = xlsx_1.default.utils.json_to_sheet(res);
    xlsx_1.default.utils.book_append_sheet(newWb, newWs);
    xlsx_1.default.writeFile(newWb, fileName);
}
exports.writeResult = writeResult;
