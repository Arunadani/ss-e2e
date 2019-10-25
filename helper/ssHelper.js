("use strict");

const ssHelper = {
  runAs: "IMPORT",
  data: require("../resources/data"),
  ele: require("../resources/elements"),
  navTest: () => {
    return true;
  },
  loginTest: function(Ele, Data) {
    element(By.css(Ele.email)).sendKeys(Data.email);
    element(By.css(Ele.pswd)).sendKeys(Data.pswd);
    //element(By.css(Ele.loginBtn)).click();
    element(By.cssContainingText(".btn", "Login")).click();
    browser.sleep(3000);
    expect(element(By.css(Ele.userIcon)).isDisplayed()).toBe(true);
  },
  getStart: function() {
    browser.refresh();
    element(By.css(ssHelper.ele.btnGetStarted)).click();
  },
  signOut: function() {
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
