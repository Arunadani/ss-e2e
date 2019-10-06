("use strict");
const data = require("../resources/data");
const ele = require("../resources/elements");

describe("When user select:", function() {
  it("Register", function() {
    element(By.css(ele.btnRegister)).click();
    element(By.css(ele.uname)).sendKeys(data.uname);
    element(By.css(ele.email)).sendKeys(data.email);
    element(By.css(ele.countryCode)).sendKeys(data.countryCode);
    element(By.css(ele.phone)).sendKeys(data.phone);
    element(By.css(ele.regPwd)).sendKeys(data.password);
    element(By.css(ele.selGroup)).click();
    element(By.css(ele.selGroup + " " + ele.optGroup)).click();
    element(By.css(ele.selCountry)).click();
    element(By.css(ele.selCountry + " " + ele.optCountry)).click();
    element(By.css(ele.checkTerms)).click();
    element(By.css(ele.btnRegister)).click();

    browser.sleep(5000);
  });
});
