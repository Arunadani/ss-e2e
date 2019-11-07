//coreAppSpec.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;

let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

let core = ssHelper.ele.coreApp;
let dashBD = ssHelper.ele.dashBd;
describe("Application: ", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
    browser.sleep(3000);
    ssHelper.getStart();
  });
  it("Login:", function() {
    ssHelper.loginTest(loginEle, loginData, 0);
  });
  xit("Click on Add more:", function() {
    element(By.css(core.btnAddmore)).click();
    browser.sleep(1000);
    expect(element(By.css(core.ssMedia)).getText()).toEqual("Social Media");
    browser.sleep(2000);
    element(by.cssContainingText(core.selectMedia, "facebook"));
    browser.sleep(2000);
    //element(By.css(".custom-control #customCheck1")).click();
    let fbselect = element(by.css("label[for='customCheck1']")).then(val => {
      console.log(val);
    });
    browser.sleep(3000);
  });

  it("Generate Report", function() {
    generateReport("2019-02-11", "2019-03-11", "success");
  });
  it("Generate Report:with Wrong Date Format", function() {
    generateReport("02-11-2018", "03-12-2019", "error");
  });
  xit("Report file downloaded or not", function() {});
  it("Click on Dashboard", function() {
    browser.sleep(3000);
    checkDashBoardIcon(dashBD.googleIcon);
  });
  it("Check Create Notes & Notes field", function() {
    expect(element(By.css(core.createNotes)).getText()).toContain(
      "Create Notes"
    );
    element(By.css(core.writeNotes)).sendKeys("very nice");
    element(By.buttonText("Submit")).click();
    browser.sleep(2000);
    expect(ssHelper.toastCheck("success")).toBe(true);
    expect(element(By.css(core.notes)).getText()).toContain("Notes");
    browser.sleep(5000);
  });
  it("SignOut", function() {
    ssHelper.signOut();
  });
});

function generateReport(from, to, status) {
  browser.sleep(5000);
  expect(element(By.css(core.leftReport)).getText()).toContain("Report");
  element(By.css(core.fromCalender)).sendKeys(from);
  element(By.css(core.toCalender)).sendKeys(to);
  element(By.buttonText("Generate")).click();
  expect(ssHelper.toastCheck(status)).toBe(true);
  browser.sleep(2000);
}

let checkDashBoardIcon = id => {
  let arrayTab = ["Positive", "Negative", "Replied", "Completed"];
  element(By.css(id)).click();
  let tabBar = element(By.css(dashBD.allTab));
  let list = element.all(By.css(dashBD.commentsTab));
  console.log("LIST LEN:" + list.length);

  if (tabBar.isDisplayed()) {
    for (let i = 0; i < 4; i++) {
      if (expect(list.get(i).getText()).toBe(arrayTab[i])) {
        list.get(i).click();
        browser.sleep(2000);
      } else {
        console.log("FALSE");
      }
    }
  }
};
