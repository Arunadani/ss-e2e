exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  baseUrl: "http://sociosource.com",
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  //specs: ["./specs/*Spec.js"],
  specs: ["./specs/coreAppSpec.js"],
  onPrepare: function() {
    global.EC = protractor.ExpectedConditions;
    browser
      .manage()
      .window()
      .maximize();
  }
};
