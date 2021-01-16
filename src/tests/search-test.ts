import dotenv from "dotenv";
import { browser } from "protractor";
import { readData, writeResult } from "../lib/excel";
import ResultRow from "../Models/ResultRow";
import LandingPage from "../pages/LandingPage";
import ResultPage from "../pages/ResultPage";
import { TestCase } from '../Models/TestCase';
import { retest } from "./retest";

dotenv.config();
browser.waitForAngularEnabled(false);

describe("Bing Search", function () {
  let result: ResultRow[] = [];
  readData(process.env.TEST_CASE_PATH as string).forEach(
    (test: TestCase, testNo: number) => {
      it(`Checking Tabs for Keyword - ${test["Data"]}`, async function () {
        let landingPage = new LandingPage();
        let resultPage = new ResultPage();
        landingPage.loadSite();
        let keyword: string = test["Data"];
        landingPage.search(keyword);
        resultPage.clickAndGetResult().then((btnsAndTexts: any) => {
          for (let i = 0; i < btnsAndTexts.length; i += 2) {
            let res: string = btnsAndTexts[i + 1]
              .flat()
              .every((x: string) =>
                x.toLowerCase().includes(keyword.toLowerCase())
              )
              ? "PASS"
              : "FAIL";
            if (i == 0)
              result.push(
                new ResultRow(
                  "TC " + (testNo + 1),
                  keyword,
                  `${testNo + 1}.${i / 2 + 1}`,
                  btnsAndTexts[i],
                  res,
                  ""
                )
              );
            else
              result.push(
                new ResultRow(
                  "",
                  "",
                  `${testNo + 1}.${i / 2 + 1}`,
                  btnsAndTexts[i],
                  res,
                  ""
                )
              );
          }
          let failedRows = result.filter((item: any, index: number) => {
            item["failedInfo"] = {
              failedBtnNo: parseInt(item["No"].split(".")[1]),
              rowNo: index,
            };
            return (
              item["Result"] == "FAIL" &&
              parseInt(item["No"].split(".")[0]) == testNo + 1
            );
          });
          if (failedRows) {
            retest(keyword, failedRows).then((res: any) => {
              if (res) {
                for (let i = 0; i < res.length; i += 2) {
                  let rerunRes = res[i + 1].every((r: string) =>
                    r.toLowerCase().includes(res[i].keyword.toLowerCase())
                  )
                    ? "PASS"
                    : "FAIL";
                  console.log(res[i].rowNo, rerunRes);
                  result[res[i].rowNo]["Rerun"] = rerunRes;
                }
                result.forEach((r: any) => delete r.failedInfo);
                writeResult(process.env.TEST_RESULT_PATH as string, result);
              }
            });
          }
        });
      });
    }
  );
});
