("use strict");
const ssHelper = require("../helper/ssHelper");
browser.ignoreSynchronization = true;
let loginEle = ssHelper.ele.login;
let loginData = ssHelper.data;

//Nav test
function navTest(nav, navContent = "") {
  element(By.css("a[href='" + nav + "']")).click();
  browser.sleep(1000);
  expect(element(By.css(nav + " " + navContent)).isDisplayed()).toBe(true);
}

describe("Navigation :", function() {
  beforeAll(() => {
    browser.get(ssHelper.ele.baseUrl);
  });

  it("Home", function() {
    navTest("#home");
  });

  it("Features", function() {
    navTest("#features");
  });

  it("Benefits", function() {
    navTest("#benfits");
  });

  it("Pricing", function() {
    navTest("#pricing");
    priceCheck();
  });

  xit("Contact", function() {
    navTest("#contact");
  });
});

function priceCheck() {
  let arrayPrice = ["Bronze", "Silver", "Gold"];
  let list = element.all(By.css(".text-primary"));

  for (let i = 0; i < 3; i++) {
    if (expect(list.get(i).getText()).toBe(arrayPrice[i])) {
      /* element(
        By.cssContainingText(".btn.btn-primary", "Choose this Plan")
      ).click(); */
    if(i=0){
      element(By.cssContainingText(".list-group-item", "  Up to 2 social media accounts"));
      element(By.cssContainingText(".btn.btn-primary", "Choose this Plan")
      ).click(); 
    }
    if(1=)
      browser.sleep(5000);
      ssHelper.loginTest(loginEle, loginData);
      ssHelper.signOut();
      browser.navigate().back();
    }
  }
}
