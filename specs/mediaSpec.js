("use strict");
const ssHelper = require("../helper/ssHelper");
const media = ssHelper.ele.media;
browser.ignoreSynchronization = true;

xdescribe("Media: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  it("Is APP link Available", function() {
    let arrApps = ["APP STORE", "GOOGLE PLAY"];
    let list = element.all(By.css(media.dwndIcon));
    for (let i = 0; i < list.length; i++) {
      if (expect(list.get(i).getText()).toBe(arrApps[i])) {
        list.get(i).click();
        browser.navigate().back();
      }
    }
  });

  it("Social Meida", function() {
    checkMedia(media.facebookIcon);
    checkMedia(media.twitterIcon);
    checkMedia(media.instagramIcon);
  });
  browser.sleep(5000);
});
/*facebook, twitter, instagram, home page video, getstarted*/
let checkMedia = id => {
  let mediaEle = element(By.css(id));
  if (mediaEle.isDisplayed()) {
    mediaEle.click();
    browser.navigate().back();
  }
};
