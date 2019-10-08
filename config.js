exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  baseUrl: "http://sociosource.com",
  framework: "jasmine",
  specs: ["./specs/*Spec.js"],

  onPrepare: function() {
    browser
      .manage()
      .window()
      .maximize();
  }
};
