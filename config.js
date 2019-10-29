var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  //specs: ["./specs/*Spec.js"],
  specs: [
    "./specs/mediaSpec.js",
    "./specs/navigationSpec.js",
    "./specs/forgotPasswordSpec.js"
  ],
  onPrepare: function() {
    global.EC = protractor.ExpectedConditions;
    browser
      .manage()
      .window()
      .maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: ".test/ss_e2e_screenShot",
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fixedScreenshotName: true,
        fileNamePrefix: "Prefix",
        cleanDestination: false,
        showPassed: false,
        fileNameDateSuffix: false,
        fileNameSeparator: "_"
      })
    );
  }
};
