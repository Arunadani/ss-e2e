//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let forgotPswd = ssHelper.ele.forgotPswd;

xdescribe("Forgot Password :", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
    ssHelper.getStart();
  });

  it("without email", function() {
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).click();
    clickSendbtn();
    expect(element(By.css(forgotPswd.alertMessage)).isDisplayed()).toBe(true);
    clickClose();
  });
  it("Invalid email", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("wrong.mail.com");
    clickSendbtn();
    expect(ssHelper.toastCheck("error")).toBe(true);
    clickClose();
  });
  it("unregistered email", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("unreg@gmail.com");
    clickSendbtn();
    clickClose();
  });

  it("valid email", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("abcd@gmail.com");
    clickSendbtn();
    browser.sleep(6000);
    expect(ssHelper.toastCheck("success")).toBe(true);
  });
  /**functions */
  let gotoForgotPswd = () => {
    element(By.css(forgotPswd.forgotPswdLink)).click();
    browser.sleep(1000);
  };
  let clickSendbtn = () => {
    element(By.css(forgotPswd.sendButton)).click();
    browser.sleep(1000);
  };
  let clickClose = () => {
    $("body.modal-open .close").click();
    browser.sleep(2000);
  };
});
