//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let forgotPswd = ssHelper.ele.forgotPswd;

describe("Forgot Password", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(7000);
    ssHelper.getStart();
  });

  it("Without entering an Email", function() {
    checkForgotPassword("", "");
  });

  it("By entering an invalid Email", function() {
    checkForgotPassword("wrong.mail.com", "error");
  });

  it("By entering a valid Email", function() {
    checkForgotPassword("abcd@gmail.com", "success");
  });

  it("By entering an unregistered Email", function() {
    checkForgotPassword("unreg@gmail.com", "error");
    /*Its failing due to  UI issue*/
  });
  browser.navigate().back();
});

function checkForgotPassword(email, status) {
  element(By.css(forgotPswd.forgotPswdLink)).click();
  browser.sleep(1000);
  element(By.css(forgotPswd.forgotPswdEmail)).sendKeys(email);
  element(By.css(forgotPswd.sendButton)).click();
  let waitTill = status == "success" ? 6000 : 1000;
  browser.sleep(waitTill);
  if (email) {
    expect(ssHelper.toastCheck(status)).toBe(true);
  } else {
    expect(element(By.css(forgotPswd.alertMessage)).isDisplayed()).toBe(true);
  }
  $(forgotPswd.closeBtn).click();
  browser.sleep(2000);
  browser.refresh();
}
