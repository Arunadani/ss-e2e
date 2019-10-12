("use strict");
const ssHelper = require("../helper/ssHelper");

xdescribe("When user register with: ", function() {
  const eleReg = ssHelper.ele.registration;
  const data = ssHelper.data;
  it("Correct details", function() {
    registerMe(data);
    expect($(eleReg.regSuccess).length()).toBe(4);
    //Check toast success
  });
  xit("existing email", function() {
    registerMe(data);
    //Check toast error
  });

  xit("When registering users from excel data", function() {
    //Loop thru with excel data
    registerMe(data);
    expect($(eleReg.regSuccess).length()).toBe(4);
  });
});

let registerMe = user => {
  $(eleReg.btnRegister).click();
  $(eleReg.uname).sendKeys(user.uname);
  $(eleReg.email).sendKeys(user.email);
  $(eleReg.countryCode).sendKeys(user.countryCode);
  $(eleReg.phone).sendKeys(user.phone);
  $(eleReg.regPwd).sendKeys(user.password);
  $(eleReg.selGroup).click();
  $(eleReg.selGroup + " " + eleReg.optGroup).click();
  $(eleReg.selCountry).click();
  $(eleReg.selCountry + " " + eleReg.optCountry).click();
  $(eleReg.checkTerms).click();
  $(eleReg.btnRegister).click();
  browser.sleep(5000);
};