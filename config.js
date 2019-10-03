exports.config = {
  directConnect: true,
  capabilities: { browserName: "chrome" },
  framework: "jasmine",
  specs: ["./specs/*Spec.js"],

  onPrepare: function() {
    browser
      .manage()
      .window()
      .maximize();
  }

  /* //Report Generation
    onPrepare: function(){ //configure junit xml report

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
           consolidateAll: true,
           filePrefix: 'guitest-xmloutput',
           savePath: 'C:\Personal\Sociosocial\Reports'
        }));
    }*/
};
