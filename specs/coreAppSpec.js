//coreAppSpec.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let login = ssHelper.ele.login;
let core = ssHelper.ele.coreApp;

describe("coreApp: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(3000);
    ssHelper.getStart();
  });
  it("Login:", function() {
    userLogin();
  });
  xit("Add more:", function() {
    element(By.css(core.btnAddmore)).click();
    browser.sleep(1000);
    expect(element(By.css(core.ssMedia)).getText()).toEqual("Social Media");
    browser.sleep(2000);
    /*Select Media*/
    element(by.cssContainingText(core.selectMedia, "facebook"));
    browser.sleep(2000);
    //element(By.css(".custom-control #customCheck1")).click();
    let fbselect = element(by.css("label[for='customCheck1']")).then(val => {
      console.log(val);
    });
    //fbselect.click();
    browser.sleep(3000);

    //$("input#customCheck2").click();
  });

  it("Report", function() {
    browser.sleep(5000);
    expect(element(By.css(core.leftReport)).getText()).toContain("Report");
    element(By.css(core.fromCalender)).sendKeys("2019-02-11");
    element(By.css(core.toCalender)).sendKeys("2019-03-11");
    element(By.buttonText("Generate")).click();
    browser.sleep(2000);
    expect(ssHelper.toastCheck("success")).toBe(true);

    browser.sleep(5000);
  });
});

let userLogin = () => {
  let pswdText = element(By.css(login.pswd));
  element(By.css(login.email)).sendKeys(ssHelper.data.email);
  pswdText.sendKeys(ssHelper.data.pswd);
  element(By.css(login.loginBtn)).click();
  browser.sleep(3000);
  expect(element(By.css(login.userIcon)).isDisplayed()).toBe(true);
};
