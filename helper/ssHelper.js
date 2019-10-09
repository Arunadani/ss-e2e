("use strict");

const ssHelper = {
  data: require("../resources/data"),
  ele: require("../resources/elements"),
  navTest: () => {
    return true;
  },
  loginTest: function() {
    return true;
  },
  getStart: function() {
    browser.refresh();
    element(By.css(ssHelper.ele.btnGetStarted)).click();
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
