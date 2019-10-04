const ele = {
  name: 'input[name="name"]',
  email: "#registermemail",
  countryCode: 'input[name="code"]',
  mobileNum: 'input[name="mobile"]',
  pssRegister: 'input[name="registerpassword"]',
  groupName: 'select[name="groupname"]',
  groupSelect: 'select[name="groupname"] option[value="3: 3"]',
  countryName: 'select[name="countryname"]',
  countrySelect: 'select[name="countryname"] option[value="4: 4"]',
  terms: 'input[name="terms"]',
  registerButton: ".btn.selected.btn-block.rounded-0"
};

xdescribe("ss:", function() {
  it("Register", function() {
    var register = ".btn.selected.btn-block.rounded-0";
    element(By.css(register)).click();

    /* var name = 'input[name="name"]';
    var email = "#registermemail";
    var countryCode = 'input[name="code"]';
    var mobileNum = 'input[name="mobile"]';
    var pssRegister = 'input[name="registerpassword"]';
    var groupName = 'select[name="groupname"]';
    var groupSelect = 'option[value="3: 3"]';
    var countryName = 'select[name="countryname"]';
    var countrySelect = 'select[name="countryname"] option[value="4: 4"]';
    var terms = 'input[name="terms"]';
    var registerButton = ".btn.selected.btn-block.rounded-0";
 */
    element(By.css(ele.name)).sendKeys("Smith");
    element(By.css(ele.email)).sendKeys("abcd@gmail.com");
    element(By.css(ele.countryCode)).sendKeys("1");
    element(By.css(ele.mobileNum)).sendKeys("1234512345");
    element(By.css(ele.pssRegister)).sendKeys("Password@123");
    //groupSelect= element(By.css(groupName));
    element(By.css(ele.groupName));
    browser.sleep(1000);
    //groupSelect.$('option[value="3: 3"]').click();
    element(By.css(ele.groupSelect)).click();
    browser.sleep(1000);

    element(By.css(ele.countryName)).click();
    browser.sleep(2000);
    element(By.css(ele.countrySelect)).click();
    browser.sleep(1000);

    element(By.css(ele.terms)).click();
    element(By.css(ele.registerButton)).click();

    browser.sleep(5000);
  });
});
