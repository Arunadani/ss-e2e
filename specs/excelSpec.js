("use strict");
/* import { Workbook, Row, Cell } from "exceljs"; */
var XL = require("../helper/excelHelper");
var ssHelper = require("../helper/ssHelper.js");

browser.ignoreSynchronization = true;

describe("Excel Read:", function() {
  var sendData = XL.readExcelData("Register", ssHelper.ele.excelFilePath);

  sendData.forEach(function(data) {
    it("call Registerme funciton", function() {
      registerHelp.registerMe(data);
    });
  });
});
