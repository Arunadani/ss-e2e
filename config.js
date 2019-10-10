exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  baseUrl: "http://sociosource.com",
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  specs: ["./specs/*Spec.js"],

  onPrepare: function() {
    browser
      .manage()
      .window()
      .maximize();
  }
};
