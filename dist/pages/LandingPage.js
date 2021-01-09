"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var protractor_1 = require("protractor");
var protractor_2 = require("../lib/protractor");
dotenv_1.default.config();
var default_1 = /** @class */ (function () {
    function default_1() {
        this.searchBox = protractor_1.by.name("q");
    }
    default_1.prototype.loadSite = function () {
        protractor_1.browser.driver.get(process.env.URL);
    };
    default_1.prototype.search = function (keyword) {
        protractor_2.selectEl(this.searchBox).sendKeys(keyword, protractor_1.protractor.Key.ENTER);
    };
    return default_1;
}());
exports.default = default_1;
