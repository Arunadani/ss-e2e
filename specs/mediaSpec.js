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
    let arrApps = ["APP STORE", "GOOGLE PLAY"];
    let list = element.all(By.css(media.dwndIcon));
    for (let i = 0; i < list.length; i++) {
      if (expect(list.get(i).getText()).toBe(arrApps[i])) {
        list.get(i).click();
        browser.navigate().back();
      }
    }
  });

  xit("Social Meida", function() {
    checkMedia(media.facebookIcon);
    checkMedia(media.twitterIcon);
    checkMedia(media.instagramIcon);
  });
  xit("Watch Viedo", function() {
    element(By.css(media.watchVideo)).click();
    browser.sleep(5000);
    element(By.css(media.closeBtn)).click();
  });
  it("Get started", function() {
    element(By.css(media.getStart)).click();
  });
});
/*facebook, twitter, instagram, home page video, getstarted*/
let checkMedia = id => {
  let mediaEle = element(By.css(id));
  if (mediaEle.isDisplayed()) {
    mediaEle.click();
    browser.navigate().back();
  }
};
