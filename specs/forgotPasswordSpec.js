//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let forgotPswd = ssHelper.ele.forgotPswd;

describe("Forgot Password", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
    ssHelper.getStart();
  });

  it("Forgot password without email", function() {
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).click();
    clickSendbtn();
    expect(element(By.css(forgotPswd.alertMessage)).isDisplayed()).toBe(true);
    clickClose();
  });
  it("Forgot password Invalid email", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("wrong.mail.com");
    clickSendbtn();
    expect(ssHelper.toastCheck("error")).toBe(true);
    clickClose();
  });
  it("Forgot password unregistered email", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("unreg@gmail.com");
    clickSendbtn();
    //expect(ssHelper.toastCheck("error")).toBe(true);
    clickClose();
  });

  it("Forgot Password", function() {
    browser.refresh();
    gotoForgotPswd();
    element(By.css(forgotPswd.forgotPswdEmail)).sendKeys("abcd@gmail.com");
    /* browser.sleep(2000);
    $(sendButton).click();*/
    clickSendbtn();
    browser.sleep(3000);
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
