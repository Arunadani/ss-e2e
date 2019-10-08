xdescribe("Media", function() {
  xit("Download Icon", function() {
    let iosIconEle = '.btn.btn-light [src="images/appleicon.png"]';
    let anroidIconEle = '.btn.btn-light [src="images/playicon.png"]';
    let viewEle = element(By.css(iosIconEle));
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      viewEle.getWebElement()
    );
    consle.log("working");
    //browser.executeScript("viewEle.scrollIntoView(true)");
    //browser.executeScript("window.scrollTo(0,0);");
    //broswer.sleep(1000);
    // viewEle.click();
    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
  });
});
