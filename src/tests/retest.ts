const { search } = require("../pages/LandingPage");
import LandingPage from "../pages/LandingPage";
import ResultPage from "../pages/ResultPage";
export function retest(keyword: any, failedRows: any) {
  LandingPage.loadSite();
  LandingPage.search(keyword);
  return new ResultPage().failedBtnResult(failedRows, keyword);
}
