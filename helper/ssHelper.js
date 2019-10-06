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
  toastCheck: type => {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($(" .toast-" + type)), 5000);
    return true;
  }
};

module.exports = ssHelper;
