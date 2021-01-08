"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var protractor_1 = __importStar(require("protractor"));
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
        protractor_2.selectEl(this.searchBox).sendKeys(keyword, protractor_1.default.Key.ENTER);
    };
    return default_1;
}());
exports.default = default_1;
