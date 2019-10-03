//TestSpecification.js

browser.ignoreSynchronization = true;

describe("ss:", function() {
  it("to check the login title", function() {
    browser.get("http://sociosource.com");
    var getStartlnk = ".btn.btn-outline-light.my-3.my-sm-0.ml-lg-3";
    element(By.css(getStartlnk)).click();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(30000);

    /* browser.driver.getTitle().then(function(pageTitle) {
          expect(pageTitle).toEqual('Free Online Tutorials and Courses');
       });*/
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
});
