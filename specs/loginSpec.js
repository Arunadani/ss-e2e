//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let login = ssHelper.ele.login;

describe("Login: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  it("LOGO present", function() {
    expect(element(By.css(ssHelper.ele.logoPresent)).isDisplayed()).toBe(true);
  });

  it("Click on 'Get Started'", function() {
    ssHelper.getStart();
  });

  it("Enter Username and Password without Eye Icon", function() {
    let pswdEyecheck = element(By.css(login.pswdEye));
    let pswdText = element(By.css(login.pswd));
    element(By.css(login.email)).sendKeys(ssHelper.data.email);

    if (pswdEyecheck.isSelected()) {
      console.log("eye diable");
      pswdText.sendKeys(ssHelper.data.pswd);
      pswdText.clear();
      console.log("eye enable");
      pswdEyecheck.click();
      pswdText.sendKeys(ssHelper.data.pswd);
    }

    element(By.css(login.loginBtn)).click();
    browser.sleep(3000);
    expect(element(By.css(login.userIcon)).isDisplayed()).toBe(true);
  });
  xit("Enter Username and Password with Eye Icon", function() {
    //ssHelper.getStart();
    let pswdEyecheck = element(By.css(login.pswdEye));
    element(By.css(login.email)).sendKeys(ssHelper.data.email);
    if (!pswdEyecheck.isSelected()) {
      pswdEyecheck.click();
    }

    element(By.css(login.pswd)).sendKeys(ssHelper.data.pswd);
    element(By.css(login.loginBtn)).click();
    browser.sleep(3000);
    expect(element(By.css(login.userIcon)).isDisplayed()).toBe(true);
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