//TestSpecification.js

browser.ignoreSynchronization = true;

describe("ss:", function() {
  it("to check the login title", function() {
    browser.get("http://sociosource.com");
    browser
      .manage()
      .timeouts()
      .implicitlyWait(10000);

    /* browser.driver.getTitle().then(function(pageTitle) {
          expect(pageTitle).toEqual('Free Online Tutorials and Courses');
       });*/
  });
  xit("Get Started:", function() {
    let getStartlnk = ".btn.btn-outline-light.my-3.my-sm-0.ml-lg-3";
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

  xit("Forgot Password", function() {
    var forgotPssWd = 'a[href="javascript:void();"]';
    var forgotMail = "#forgotpassword";
    var sendButton = '.btn.btn-primary[type="button"]';
    var alertDialog;

    element(By.css(forgotPssWd)).click();
    broswer.sleep(1000);
    element(By.css(forgotMail)).sendKeys("arunarose@gmail.com");
    browser
      .manage()
      .timeouts()
      .implicitlyWait(50000);
    element(By.css(sendButton)).click();

    alertDialog = browser.switchTo().alert();
    alertDialog.getText();
    // set text to the prompt
    browser.sleep(10000);
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
  browser.sleep(20000);
});
