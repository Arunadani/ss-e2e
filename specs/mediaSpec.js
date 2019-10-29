("use strict");
const ssHelper = require("../helper/ssHelper");
const media = ssHelper.ele.media;
browser.ignoreSynchronization = true;

describe("Media: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });
  it("Click on Watch Video", function() {
    element(By.css(media.watchVideo)).click();
    browser.sleep(8000);
    expect(element(By.css("#videoModal")).isDisplayed()).toBe(true);
    element(By.css(media.closeBtn)).click();
  });
  it("Is Download APP link Available", function() {
    browser.refresh();
    let arrApps = ["APP STORE", "GOOGLE PLAY"];
    let list = element.all(By.css(media.dwndIcon));
    for (let i = 0; i < list.length; i++) {
      if (expect(list.get(i).getText()).toBe(arrApps[i])) {
        list.get(i).click();
        browser.navigate().back();
      }
    }
  });

  it("Click on all the social Media", function() {
    browser.refresh();
    checkMedia(media.facebookIcon);
    checkMedia(media.twitterIcon);
    checkMedia(media.instagramIcon);
    browser.refresh();
  });

  it("Click on Get started", function() {
    browser.sleep(2000);
    element(By.cssContainingText(".play-button a", "Get Started")).click();
    //element(By.css(media.getStart)).click();
    browser.sleep(3000);
    browser.navigate().back();
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
