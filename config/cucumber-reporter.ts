const reporter = require('cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/',
  launchReport: false,
  name: 'Mercer Indigo',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  storeScreenshots: true,
  theme: 'bootstrap',
});
