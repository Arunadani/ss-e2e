("use strict");

const ssHelper = {
  runAs: "IMPORT",
  data: require("../resources/data"),
  ele: require("../resources/elements"),
  navTest: () => {
    return true;
  },
  loginTest: function(Ele, Data, Eye) {
    element(By.css(Ele.email)).sendKeys(Data.email);
    if (Eye == 1) {
      element(By.css(Ele.pswdEye)).click();
    }
    element(By.css(Ele.pswd)).sendKeys(Data.pswd);
    element(By.cssContainingText(".btn", "Login")).click();
    browser.sleep(3000);
    expect(element(By.css(Ele.userIcon)).isDisplayed()).toBe(true);
  },
  getStart: function() {
    //browser.refresh();
    expect(
      element(By.css(ssHelper.ele.btnGetStarted)).isDisplayed()
    ).toBeTruthy();
    element(By.css(ssHelper.ele.btnGetStarted)).click();
    // element(By.cssContainingText(".nav-item", " Get Started")).click();
    browser.sleep(2000);
  },
  signOut: function() {
    expect(element(By.css(ssHelper.ele.signOut)).isDisplayed()).toBeTruthy();
    element(By.css(ssHelper.ele.signOut)).click();
  },
  toastCheck: type => {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($(" .toast-" + type)), 5000);
    return true;
  },

  scrollToElement: ele => {
    browser.$(ele);
  }
};

module.exports = ssHelper;
