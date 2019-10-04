/* Navigation Spec*/
function fun_present(ele, dEle, pEle) {
  element(By.css(ele)).click();
  browser.sleep(10000);
  (pEle = element(By.css(dEle))), expect(pEle.isPresent()).toBe(true);
  browser.sleep(5000);
}
xdescribe("ss Navigation:", function() {
  it("Home", function() {
    let hEle = 'a[href="#home"]';
    let hdisplayEle = "#home";
    let hpresentEle;
    fun_present(hEle, hdisplayEle, hpresentEle);
  });

  it("Features", function() {
    let fEle = 'a[href="#features"]';
    let fdisplayEle = "#features";
    let fpresentEle;
    fun_present(fEle, fdisplayEle, fpresentEle);
  });

  it("Benefits", function() {
    let bEle = 'a[href="#benfits"]';
    let bdisplayEle = ".w-100.float-left.py-1";
    let bpresentEle;
    fun_present(bEle, bdisplayEle, bpresentEle);
  });

  xit("Pricing", function() {
    let pEle = 'a[href="#pricing"]';
    let pdisplayEle = "#pricing";
    /*"section-title small[PRICING]";*/
    let ppresentEle;
    fun_present(pEle, pdisplayEle, ppresentEle);
  });

  it("Contact", function() {
    let cEle = 'a[href="#contact"]';
    let cdisplayEle = ".ti-location-pin.mr-2";
    let cpresentEle;
    fun_present(cEle, cdisplayEle, cpresentEle);
  });
});
