import { browser } from "protractor";

export function selectEl(selector: any) {
  return browser.driver.findElement(selector);
}
export function selectAll(selector: any) {
  return browser.driver.findElement(selector);
}
