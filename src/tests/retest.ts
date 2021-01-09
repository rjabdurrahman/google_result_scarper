const { search } = require("../pages/LandingPage");
import LandingPage from "../pages/LandingPage";
import ResultPage from "../pages/ResultPage";
export function retest(keyword: any, failedRows: any) {
  let landingPage = new LandingPage();
  let resultPage = new ResultPage();
  landingPage.loadSite();
  landingPage.search(keyword);
  return resultPage.failedBtnResult(failedRows, keyword);
}
