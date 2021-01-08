import dotenv from "dotenv";
import protractor, { browser, by } from "protractor";
import { selectEl } from "../lib/protractor";
dotenv.config();

export default abstract class {
  private static searchBox: any;
  searchBox = by.name("q");
  static loadSite() {
    browser.driver.get(process.env.URL as string);
  }

  static search(keyword: string) {
    selectEl(this.searchBox).sendKeys(keyword, protractor.Key.ENTER);
  }
}
