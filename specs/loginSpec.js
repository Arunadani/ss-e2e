("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

describe("Login: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(5000);
  });

  it("Check LOGO present", function() {
    expect(element(By.css(ssHelper.ele.logoPresent)).isDisplayed()).toBe(true);
  });

  it("Click on 'Get Started'", function() {
    ssHelper.getStart();
  });

  it("Enter Username & Password without Eye Icon", function() {
    ssHelper.loginTest(loginEle, loginData, 0);
    ssHelper.signOut();
  });
  it("Enter Username and Password with Eye Icon", function() {
    ssHelper.loginTest(loginEle, loginData, 1);
    ssHelper.signOut();
  });
});
