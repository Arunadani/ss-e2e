//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

xdescribe("Forgot Password", function() {
  /* Forgot password*/
  var forgotPssWd = ".card a";
  var forgotMail = "#forgotpassword";
  var sendButton = ".modal-footer button";
  xit("Forgot password without email", function() {});
  xit("Forgot password Invalid email", function() {});
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
});
