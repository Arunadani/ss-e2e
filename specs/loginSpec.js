//TestSpecification.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

describe("Login :", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
  });

  /* Forgot password*/
  var forgotPssWd = ".card a";
  var forgotMail = "#forgotpassword";
  var sendButton = ".modal-footer button";
  var getStartlnk = "#navbar .nav-item a.btn";

  var alertDialog;

  //.toast-error, .toast-warning, .toast-success

  it("Clikc on 'Get Started'", function() {
    element(By.css(getStartlnk)).click();
    /*  browser
      .manage()
      .timeouts()
      .implicitlyWait(3000); */
  });

  xit("Enter username and Password", function() {
    var userName = 'input[name="email"]';
    //var pssWord ="";
    element(By.css(userName)).sendKeys("abc@gmail.com");
  });

  it("LOGO present", function() {
    let lEle = ".navbar .navbar-brand img";
    let displayEle;
    displayEle = element(By.css(lEle));
    expect(displayEle.isPresent()).toBe(true);
  });

  xit("Download Icon", function() {
    let iosIconEle = '.btn.btn-light [src="images/appleicon.png"]';
    let anroidIconEle = '.btn.btn-light [src="images/playicon.png"]';
    let viewEle = element(By.css(iosIconEle));
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      viewEle.getWebElement()
    );
    consle.log("working");
    //browser.executeScript("viewEle.scrollIntoView(true)");
    //browser.executeScript("window.scrollTo(0,0);");
    //broswer.sleep(1000);
    // viewEle.click();
    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
  });

  xit("Scroll to Bottom", function() {
    let bottomEle = ".my-5.text-center";
    //let print;

    browser.executeScript(
      "arguments[0].scrollIntoView();",
      element(By.css(bottomEle)).getWebElement()
    );
  });
});
