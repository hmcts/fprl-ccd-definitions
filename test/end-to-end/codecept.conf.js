exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      // headless mode
      show: true,
      url: 'http://localhost:3000',
      waitForNavigation: ['load', 'domcontentloaded', 'networkidle0'],
      waitForTimeout: 90000,
      chrome: { ignoreHTTPSErrors: true }
    },
    GeneralHelper: { require: './helpers/generalHelper.js' }
  },
  include: { I: './steps_file.js' },
  bootstrap: null,
  mocha: {},
  name: 'div-ccd-definitions'
};
