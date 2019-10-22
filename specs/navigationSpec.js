("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

describe("Navigation :", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
  });

  it("Home", function() {
    navTest("#home");
  });

  it("Features", function() {
    navTest("#features");
    featureLogoTest();
    featureBodyTest();
  });

  xit("Benefits", function() {
    navTest("#benfits");
    expect(element(By.css(".list-unstyled")).isDisplayed()).toBe(true);
    expect(element(By.css('img[alt="iphone"]')).isDisplayed()).toBe(true);
  });

  xit("Pricing", function() {
    navTest("#pricing");
    priceCheck();
  });

  xit("Contact", function() {
    navTest("#contact");
  });
});

//Nav test
function navTest(nav, navContent = "") {
  element(By.css("a[href='" + nav + "']")).click();
  browser.sleep(1000);
  expect(element(By.css(nav + " " + navContent)).isDisplayed()).toBe(true);
}

function priceCheck() {
  let arrayPrice = ["Bronze", "Silver", "Gold"];
  let list = element.all(By.css(".text-primary"));

  for (let i = 0; i < 3; i++) {
    if (expect(list.get(i).getText()).toBe(arrayPrice[i])) {
      element(
        By.cssContainingText(".btn.btn-primary", "Choose this Plan")
      ).click();
      /*  if(i=0){
      element(By.cssContainingText(".list-group-item", "  Up to 2 social media accounts"));
      element(By.cssContainingText(".btn.btn-primary", "Choose this Plan")
      ).click(); 
    } */

      browser.sleep(5000);
      ssHelper.loginTest(loginEle, loginData);
      ssHelper.signOut();
      browser.navigate().back();
    }
  }
}

function featureLogoTest() {
  let arrayLogo = [".ti-face-smile", ".ti-receipt", ".ti-cup"];
  for (i = 0; i < 3; i++) {
    expect(element(By.css(arrayLogo[i])).isDisplayed()).toBe(true);
  }
}

function featureBodyTest() {
  let arrayBody = ["Understand", "Analyze", "Grow"];
  for (i = 0; i < 3; i++) {
    expect(
      element(By.cssContainingText(".media h4", arrayBody[i])).isDisplayed()
    ).toBe(true);
  }
}
