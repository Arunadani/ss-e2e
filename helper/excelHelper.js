("use strict");

var XLSX = require("xlsx");
class xlReader {
  readExcelData(sheet, filePath) {
    var workbook = XLSX.readFile(filePath);
    var worksheet = workbook.Sheets[sheet];
    /* var cell = "A2";
    console.log("A2 value is :" + worksheet[cell].v); */
    return XLSX.utils.sheet_to_json(worksheet);
  }
}
module.exports = new xlReader();
