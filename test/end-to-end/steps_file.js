// in this file you can append custom step methods to 'I' object

const I = actor();

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
    createCase() {
      I.waitForElement('ul > li:nth-child(2) > a');
      this.click('ul > li:nth-child(2) > a');
      this.click('Start');
      this.waitForElement('h1');
      this.fillField('//input[@id="ApplicantName"]', 'Test Parent');
      this.fillField('//input[@id="ChildName"]', 'Test Child');
      this.click('Continue');
      this.see('Check your answers');
      this.click('Submit');
    },

    safeguardingAndRiskOfHarm() {
      this.click('#next-step').selectByVisibleText('Safeguarding and risk of harm');
    }
  });
};
