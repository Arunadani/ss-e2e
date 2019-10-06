//TestSpecification.js

("use strict");
const ssHelper = require("./../helper/ssHelper.js");
browser.ignoreSynchronization = true;

describe("ss:", function() {
  /* Forgot password*/
  var forgotPssWd = ".card a";
  var forgotMail = "#forgotpassword";
  var sendButton = ".modal-footer button";
  var alertDialog;

  //.toast-error, .toast-warning, .toast-success

  xit("to check the login title", function() {
    browser.get("http://sociosource.com");
    browser
      .manage()
      .timeouts()
      .implicitlyWait(1000);

    /* browser.driver.getTitle().then(function(pageTitle) {
          expect(pageTitle).toEqual('Free Online Tutorials and Courses');
       });*/
  });
  it("Get Started:", function() {
    let getStartlnk = "#navbar .nav-item a.btn";
    element(By.css(getStartlnk)).click();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(30000);
  });

  xit("Type username and Password", function() {
    var userName = 'input[name="email"]';
    //var pssWord ="";
    element(By.css(userName)).sendKeys("abc@gmail.com");
  });
  xit("Forgot password without email", function() {});
  xit("Forgot password Invalid email", function() {});
  xit("Forgot password unregistered email", function() {});

  it("Forgot Password", function() {
    element(By.css(forgotPssWd)).click();
    browser.sleep(1000);
    element(By.css(forgotMail)).sendKeys("abcd@gmail.com");
    browser.sleep(2000);
    $(sendButton).click();
    browser.sleep(5000);

    expect(ssHelper.toastCheck("success")).toBe(true);
  });

  xit("LOGO present", function() {
    let lEle = '.img-fluid [alt="logo"]';
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
