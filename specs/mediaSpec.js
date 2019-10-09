("use strict");
const ssHelper = require("../helper/ssHelper");
const media = ssHelper.ele.media;
browser.ignoreSynchronization = true;

describe("Media: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  xit("Is APP link Available", function() {
    let list = element.all(By.css(media.dwndIcon));
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

  it("Social Meida", function() {
    checkMedia(media.facebookIcon);
    checkMedia(media.twitterIcon);
    checkMedia(media.instagramIcon);
  });
  browser.sleep(5000);
});

let checkMedia = id => {
  let mediaEle = element(By.css(id));
  if (mediaEle.isDisplayed()) {
    mediaEle.click();
    browser.navigate().back();
  }
};
