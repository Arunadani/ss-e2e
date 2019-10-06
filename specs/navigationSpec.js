//Nav test
function navTest(ele, eleContent = "") {
  element(By.css("a[href='" + ele + "']")).click();
  browser.sleep(1000);
  expect(element(By.css(ele + " " + eleContent)).isDisplayed()).toBe(true);
}

xdescribe("ss Navigation:", function() {
  it("Home", function() {
    navTest("#home");
  });

  it("Features", function() {
    navTest("#features");
  });

  it("Benefits", function() {
    navTest("#benfits", "h3");
  });

  it("Pricing", function() {
    navTest("#pricing");
  });

  it("Contact", function() {
    navTest("#contact", "p");
  });
});
