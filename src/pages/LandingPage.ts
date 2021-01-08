import dotenv from "dotenv";
import protractor, { browser, by } from "protractor";
import { selectEl } from "../lib/protractor";
dotenv.config();

// function LandingPage() {
//   this.searchBox = by.name("q");

//   this.get = function () {
//     browser.driver.get(process.env.URL);
//   };

//   this.search = function (keyword) {
//     selectEl(this.searchBox).sendKeys(keyword, protractor.Key.ENTER);
//   };
// }

export default class {
  private searchBox: any;
  constructor() {
    this.searchBox = by.name("q");
  }
  loadSite() {
    browser.driver.get(process.env.URL as string);
  }

  search(keyword: String) {
    selectEl(this.searchBox).sendKeys(keyword, protractor.Key.ENTER);
  }
}
