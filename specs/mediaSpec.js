("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

describe("Media", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  it("Download Icon", function() {
    let list = element.all(By.css(ssHelper.ele.media.dwndIcon));
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      list.get(0).getWebElement()
    );
    if (expect(list.get(0).getText()).toBe("APP STORE")) {
      list.get(0).click();
      browser.navigate().back();
    }
    if (expect(list.get(1).getText()).toBe("GOOGLE PLAY")) {
      list.get(1).click();
      browser.navigate().back();
    }
    browser.sleep(5000);
  });
});
