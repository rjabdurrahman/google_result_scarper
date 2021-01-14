import dotenv from "dotenv";
import XLSX from "xlsx";
import { TestCase } from './types';
dotenv.config();

function readData(filePath: string): TestCase[] {
  let workbook = XLSX.readFile(filePath);
  let sheet_name_list = workbook.SheetNames;
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]) as TestCase[];
}

function writeResult(fileName: string, res: object[]) {
  let newWb = XLSX.utils.book_new();
  let newWs = XLSX.utils.json_to_sheet(res);
  XLSX.utils.book_append_sheet(newWb, newWs);
  XLSX.writeFile(newWb, fileName);
}

export { readData, writeResult };
