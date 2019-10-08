("use strict");
const data = require("../resources/data");
const ele = require("../resources/elements");
const eleReg = ele.registration;

xdescribe("When user register with: ", function() {
  it("Correct details", function() {
    registerMe(data);
  });
  xit("existing email", function() {
    registerMe(data);
  });

  xit("using excel", function() {
    registerMe(data);
  });
});

let registerMe = user => {
  element(By.css(eleReg.btnRegister)).click();
  element(By.css(eleReg.uname)).sendKeys(user.uname);
  element(By.css(eleReg.email)).sendKeys(user.email);
  element(By.css(eleReg.countryCode)).sendKeys(user.countryCode);
  element(By.css(eleReg.phone)).sendKeys(user.phone);
  element(By.css(eleReg.regPwd)).sendKeys(user.password);
  element(By.css(eleReg.selGroup)).click();
  element(By.css(eleReg.selGroup + " " + eleReg.optGroup)).click();
  element(By.css(eleReg.selCountry)).click();
  element(By.css(eleReg.selCountry + " " + eleReg.optCountry)).click();
  element(By.css(eleReg.checkTerms)).click();
  element(By.css(eleReg.btnRegister)).click();
  browser.sleep(5000);
};
