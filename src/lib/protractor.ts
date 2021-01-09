import { browser } from "protractor";

function selectEl(selector: any) {
  return browser.driver.findElement(selector);
}
function selectAll(selector: any) {
  return browser.driver.findElement(selector);
}

export { selectEl, selectAll };
