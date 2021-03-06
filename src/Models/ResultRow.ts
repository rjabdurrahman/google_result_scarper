class ResultRow {
  private ["Test Case"]: any;
  private ["Data"]: any;
  private ["No"]: any;
  private ["Button Text"]: any;
  private ["Date - Time"]: any;
  private ["Result"]: any;
  private ["Rerun"]: any;
  constructor(
    testCase: any,
    data: any,
    no: any,
    btnText: any,
    result: any,
    rerun: any
  ) {
    this["Test Case"] = testCase;
    this["Data"] = data;
    this["No"] = no;
    this["Button Text"] = btnText;
    this["Date - Time"] = new Date().toString();
    this["Result"] = result;
    this["Rerun"] = rerun;
  }
}

export default ResultRow;
