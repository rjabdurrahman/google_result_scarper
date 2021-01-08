"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAll = exports.selectEl = void 0;
var protractor_1 = require("protractor");
function selectEl(selector) {
    return protractor_1.browser.driver.findElement(selector);
}
exports.selectEl = selectEl;
function selectAll(selector) {
    return protractor_1.browser.driver.findElement(selector);
}
exports.selectAll = selectAll;
