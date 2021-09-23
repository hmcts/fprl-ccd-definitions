exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      show: true,
      url: 'http://localhost:3000',
      waitForNavigation: ['domcontentloaded'],
      chrome: { ignoreHTTPSErrors: true }
    }
  },
  include: { I: './steps_file.js' },
  bootstrap: null,
  mocha: {},
  name: 'div-ccd-definitions'
};
