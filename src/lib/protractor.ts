import { browser } from "protractor";

export default class {
  selectEl(selector: any) {
    return browser.driver.findElement(selector);
  }
  selectAll(selector: any) {
    return browser.driver.findElement(selector);
  }
}
