"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retest = void 0;
var search = require("../pages/LandingPage").search;
var LandingPage_1 = __importDefault(require("../pages/LandingPage"));
var ResultPage_1 = __importDefault(require("../pages/ResultPage"));
function retest(keyword, failedRows) {
    new LandingPage_1.default().loadSite();
    new LandingPage_1.default().search(keyword);
    return new ResultPage_1.default().failedBtnResult(failedRows, keyword);
}
exports.retest = retest;
