("use strict");
const ssHelper = require("../helper/ssHelper");
var XL = require("../helper/excelHelper");

let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

const eleReg = ssHelper.ele.registration;

browser.ignoreSynchronization = true;
beforeAll(() => {
  browser.get(ssHelper.ele.baseUrl);
  browser.sleep(3000);
});
xdescribe("Registration: ", function() {
  it("Register with Correct details", function() {
    registerMe(loginData);
    expect($(eleReg.regSuccess).length()).toBe(4);
    //Check toast success
  });
  it("Register again with existing email", function() {
    registerMe(loginData);
    //Check toast error
  });

  it("Register multible user from excel ", function() {
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
describe("Register Negative Test Cases", function() {
  it("Register with Missing filed", function() {
    ssHelper.getStart();
    element(By.buttonText("Register")).click();
    let list = $$(".card-body .form-group");
    list.count().then(function(size) {
    
      console.log("Random" + getRandomInt(size));
    });
  });
  xit("Register with wrong data", function() {});
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
