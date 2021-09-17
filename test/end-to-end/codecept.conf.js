exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      // headless mode
      show: true,
      url: 'http://localhost:3000',
      waitForNavigation: ['load', 'domcontentloaded', 'networkidle0'],
      waitForAction: 4000,
      waitForTimeout: 4000,
      chrome: { ignoreHTTPSErrors: true }
    }
  },
  include: { I: './steps_file.js' },
  bootstrap: null,
  mocha: {},
  name: 'div-ccd-definitions'
};
