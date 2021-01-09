import dotenv from "dotenv";
import { browser, by, protractor } from "protractor";
import { selectEl } from "../lib/protractor";
dotenv.config();

export default class {
  private searchBox: any;
  constructor() {
    this.searchBox = by.name("q");
  }
  loadSite() {
    browser.driver.get(process.env.URL as string);
  }

  search(keyword: string) {
    selectEl(this.searchBox).sendKeys(keyword, protractor.Key.ENTER);
  }
}
