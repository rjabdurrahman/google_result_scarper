import dotenv from "dotenv";
import XLSX from "xlsx";
dotenv.config();

function readData(filePath: string) {
  let workbook = XLSX.readFile(filePath);
  let sheet_name_list = workbook.SheetNames;
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

function writeResult(fileName: string, res: object[]) {
  let newWb = XLSX.utils.book_new();
  let newWs = XLSX.utils.json_to_sheet(res);
  XLSX.utils.book_append_sheet(newWb, newWs);
  XLSX.writeFile(newWb, fileName);
}

export { readData, writeResult };
