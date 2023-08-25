//https://github.com/WasiqB/multiple-cucumber-html-reporter
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "report/",
  reportPath: "report/",
  pageTitle: "Cucumber report",
  //displayDuration: true,
  //durationInMS: true,
  hideMetadata: true,
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Testes DevFinance" }
    ],
  },
});