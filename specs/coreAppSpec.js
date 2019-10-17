//coreAppSpec.js
("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let login = ssHelper.ele.login;
let core = ssHelper.ele.coreApp;
let dashBD = ssHelper.ele.dashBd;

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

  xit("Report", function() {
    browser.sleep(5000);
    expect(element(By.css(core.leftReport)).getText()).toContain("Report");
    element(By.css(core.fromCalender)).sendKeys("2019-02-11");
    element(By.css(core.toCalender)).sendKeys("2019-03-11");
    element(By.buttonText("Generate")).click();
    browser.sleep(2000);
    expect(ssHelper.toastCheck("success")).toBe(true);
  });
  xit("Report file downloaded or not", function() {});
  it("Dashboard", function() {
    browser.sleep(3000);
    checkDashBoardIcon(dashBD.googleIcon);
  });
  it("Create Notes & Notes", function() {
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

let userLogin = () => {
  let pswdText = element(By.css(login.pswd));
  element(By.css(login.email)).sendKeys(ssHelper.data.email);
  pswdText.sendKeys(ssHelper.data.pswd);
  element(By.css(login.loginBtn)).click();
  browser.sleep(3000);
  expect(element(By.css(login.userIcon)).isDisplayed()).toBe(true);
};
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
