//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

describe("Login :", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  it("LOGO present", function() {
    expect(element(By.css(ssHelper.ele.logoPresent)).isDisplayed()).toBe(true);
  });

  it("Clikc on 'Get Started'", function() {
    browser.refresh();
    element(By.css(ssHelper.ele.btnGetStarted)).click();
  });

  it("Enter username and Password", function() {
    element(By.css(ssHelper.ele.login.email)).sendKeys(ssHelper.data.email);
    element(By.css(ssHelper.ele.login.pswd)).sendKeys(ssHelper.data.pswd);
    element(By.css(ssHelper.ele.login.loginBtn)).click();
    browser.sleep(3000);
    expect(element(By.css(ssHelper.ele.login.userIcon)).isDisplayed()).toBe(
      true
    );
  });

  /* xit("Scroll to Bottom", function() {
    let bottomEle = ".my-5.text-center";
    //let print;
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      element(By.css(bottomEle)).getWebElement()
    ); 
  });*/
});
