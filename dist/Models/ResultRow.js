"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultRow = /** @class */ (function () {
    function ResultRow(testCase, data, no, btnText, result, rerun) {
        this["Test Case"] = testCase;
        this["Data"] = data;
        this["No"] = no;
        this["Button Text"] = btnText;
        this["Date - Time"] = new Date().toString();
        this["Result"] = result;
        this["Rerun"] = rerun;
    }
    return ResultRow;
}());
exports.default = ResultRow;
