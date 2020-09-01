// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    browsers: [
      "ChromeHeadless",
      // "Chrome"
    ],
    reporters: [
      "brief",
      // "kjhtml",
      // "coverage-istanbul",
    ],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-brief-reporter"),
      // require("karma-jasmine-html-reporter"),
      // require("karma-coverage-istanbul-reporter"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    basePath: "",
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
    logLevel: config.LOG_INFO,
    briefReporter: {
      // https://www.npmjs.com/package/karma-brief-reporter
      suppressErrorReport: false,
      earlyErrorReport: true,
      suppressErrorHighlighting: true,
      omitExternalStackFrames: true,
      suppressBrowserLogs: true,
      renderOnRunCompleteOnly: true,
    },
    jasmineHtmlReporter: {
      // https://www.npmjs.com/package/karma-jasmine-html-reporter
    },
    coverageIstanbulReporter: {
      // https://www.npmjs.com/package/karma-coverage-istanbul-reporter
      // https://angular.io/guide/testing-code-coverage
      // dir: require("path").join(__dirname, "./coverage/angular-starterkit"),
      // reports: ["html", "lcovonly", "text-summary"],
      // fixWebpackSourcePaths: true,
    },
  });
};
