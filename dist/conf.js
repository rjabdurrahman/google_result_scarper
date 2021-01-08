"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["./tests/search-test.js"],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 250000,
    },
};
