("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;
beforeAll(() => {
  browser.get(ssHelper.ele.baseUrl);
});

xdescribe("Navigation Header:", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
  });

  xit("Home", function() {
    navTest("#home");
  });

  xit("Features", function() {
    let arrayTab = ["Tags", "No Robots", "Reports"];
    let list = element.all(By.css(".nav.nav-tabs .nav-link"));
    navTest("#features");
    expect($$("#features .card.features").count()).toBe(3);
    featureLogoTest();
    featureBodyTest();
    for (i = 0; i < 3; i++) {
      if (expect(list.get(i).getText()).toBe(arrayTab[i])) {
        list.get(i).click();
        browser.sleep(1000);
      }
    }
  });

  xit("Benefits", function() {
    navTest("#benfits");
    expect(element(By.css(".list-unstyled")).isDisplayed()).toBe(true);
    expect(element(By.css('img[alt="iphone"]')).isDisplayed()).toBe(true);
    expect($$("#benfits .media").count()).toBe(6);
  });

  xit("Pricing", function() {
    navTest("#pricing");
    priceCheck();
  });
});

describe("Navigation Footer", function() {
  it("Privacy Policy,Phone Number & Email", function() {
    navTest("#contact");

    element(
      By.cssContainingText(".terms-policy a", "Terms and Conditions")
    ).click();
    browser.navigate().back();
    element(By.cssContainingText(".terms-policy a", "Privacy Policy")).click();
    browser.navigate().back();

    browser.sleep(5000);
    expect(
      element(
        By.cssContainingText("#contact a", "support@sociosource.com")
      ).isDisplayed()
    ).toBe(true);
    expect(
      element(
        By.cssContainingText("#contact a", "+81 90 4708 2567")
      ).isDisplayed()
    ).toBe(true);
  });
});

//Nav test
function navTest(nav, navContent = "") {
  element(By.css("a[href='" + nav + "']")).click();
  browser.sleep(1000);
  //console.log("nav element", +nav + " " + navContent);
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
