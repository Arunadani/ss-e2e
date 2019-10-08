("use strict");
const ssHelper = require("../helper/ssHelper");

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
  });

  it("Contact", function() {
    navTest("#contact");
  });
});
