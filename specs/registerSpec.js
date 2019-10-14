("use strict");
const ssHelper = require("../helper/ssHelper");
var XL = require("../helper/excelHelper");
const eleReg = ssHelper.ele.registration;
const data = ssHelper.data;
browser.ignoreSynchronization = true;
describe("When user register with: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(3000);
  });

  xit("Correct details", function() {
    registerMe(data);
    expect($(eleReg.regSuccess).length()).toBe(4);
    //Check toast success
  });
  xit("existing email", function() {
    registerMe(data);
    //Check toast error
  });

  it("excel data", function() {
    //expect($(eleReg.regSuccess).length()).toBe(4);
    var sendData = XL.readExcelData("Register", ssHelper.ele.excelFilePath);
    sendData.forEach(function(data) {
      /* 1.check all the required data is present
      2.navigate to home page
      3.logout*/
      ssHelper.getStart();
      registerMe(data);
      browser.navigate().back();
    });
  });
});

let registerMe = user => {
  $(eleReg.btnRegister).click();
  $(eleReg.uname).sendKeys(user.uname);
  $(eleReg.email).sendKeys(user.email);
  $(eleReg.countryCode).sendKeys(user.countryCode);
  $(eleReg.phone).sendKeys(user.phone);
  $(eleReg.regPwd).sendKeys(user.password);
  $(eleReg.selGroup).click();
  $(eleReg.selGroup + " " + eleReg.optGroup).click();
  $(eleReg.selCountry).click();
  $(eleReg.selCountry + " " + eleReg.optCountry).click();
  $(eleReg.checkTerms).click();
  // $(eleReg.btnRegister).click();
  $(by.buttonText("Register"));

  browser.sleep(5000);
};
