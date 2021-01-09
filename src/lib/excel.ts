import dotenv from "dotenv";
import XLSX from "xlsx";
dotenv.config();
let workbook = XLSX.readFile(process.env.TEST_CASE_PATH as string);
let sheet_name_list = workbook.SheetNames;

export function readData() {
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

export function writeResult(fileName: any, res: any) {
  let newWb = XLSX.utils.book_new();
  let newWs = XLSX.utils.json_to_sheet(res);
  XLSX.utils.book_append_sheet(newWb, newWs);
  XLSX.writeFile(newWb, fileName);
}
