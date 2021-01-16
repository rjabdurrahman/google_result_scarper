import { Config } from "protractor";

export let config: Config = {
  directConnect: true,
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["./tests/search-test.js"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 250000,
  },
  browserName: 'chrome',
  chromeOptions: {
    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
  }
};
