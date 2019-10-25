exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  //specs: ["./specs/*Spec.js"],
  specs: ["./specs/forgotPasswordSpec.js"],
  onPrepare: function() {
    global.EC = protractor.ExpectedConditions;
    browser
      .manage()
      .window()
      .maximize();
  }
};
