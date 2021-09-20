const { createCase } = require('./pages/createCase/createCase');

module.exports = () => {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    loginAsSolicitor() {
      this.amOnPage(`${process.env.CCD_URL}`);
      this.click('#cookie-accept-submit');
      this.seeElement('#authorizeCommand > div.form-section > div.login-list > input.button');
      this.fillField('username', 'fprl_caseworker_solicitor@mailinator.com');
      this.fillField('password', 'Nagoya0102');
      this.click('#authorizeCommand > div.form-section > div.login-list > input.button');
    },
    createCase
  });
};
