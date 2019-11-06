("use strict");
const ssHelper = require("../helper/ssHelper");
var XL = require("../helper/excelHelper");

let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

let eleReg = ssHelper.ele.registration;

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
    let randomNum = getRandomInt(loginData.regForm.length);
    console.log("Random number" + randomNum);
    for (let i = 0; i < loginData.regForm.length; i++) {
      if (i == randomNum) {
      } else {
        $(eleReg[loginData.regForm[i]]).sendKeys(
          loginData[loginData.regForm[i]]
        );
      }
    }
    selectDropDownGroup("Spa");
    selectDropDownCountry("Singapore");
    $(eleReg.checkTerms).click();
    element(By.buttonText("Register")).click();
    browser.sleep(1000);
    expect(ssHelper.toastCheck("error")).toBe(true);
  });
});
function selectDropDownCountry(country) {
  let dropDownArray = [
    "Country",
    "Australia",
    "Singapore",
    "Japan",
    "United States"
  ];
  $(eleReg.selCountry).click();
  for (let i = 0; i < 7; i++) {
    if (country == dropDownArray[i]) {
      element(By.cssContainingText("option", country)).click();
    }
  }
}

function selectDropDownGroup(type) {
  let dropDownGroup = [
    "Business",
    "Restaurant",
    "Automobiles",
    "Flowers",
    "Real Estate",
    "Enterprise",
    "Hotel",
    "Spa"
  ];
  $(eleReg.selGroup).click();
  for (let i = 0; i <= 7; i++) {
    if (type == dropDownGroup[i]) {
      element(By.cssContainingText("option", type)).click();
    }
  }
}

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
  element(By.buttonText("Register")).click();
};
