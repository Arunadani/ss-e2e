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
    clickSendbtn();
    //checkAlert();
    //clickClose();
  });
  xit("Forgot password Invalid email", function() {
    gotoForgotPswd();
  });
  xit("Forgot password unregistered email", function() {});

  xit("Forgot Password", function() {
    element(By.css(forgotPssWd)).click();
    browser.sleep(1000);
    element(By.css(forgotMail)).sendKeys("abcd@gmail.com");
    browser.sleep(2000);
    $(sendButton).click();
    browser.sleep(5000);

    expect(ssHelper.toastCheck("success")).toBe(true);
  });
  /**functions */
  let gotoForgotPswd = () => {
    element(By.css(forgotPswd.forgotPswdLink)).click();
    browser.sleep(2000);
  };
  let clickSendbtn = () => {
    element(By.css(forgotPswd.sendButton)).click();
    browser.sleep(2000);
  };
  let checkAlert = () => {
    element(By.css(".alert.alert-danger"));
    /* expect(element(By.css(forgotPswd.alertMessage)).isPresent()).toBe(
        "Email id is required."
      )
 */

    console.log("EMAIL");
    browser.sleep(2000);
  };
  let clickClose = () => {
    element(By.css(forgotPswd.clickClose)).click();
    browser.sleep(2000);
  };
});
