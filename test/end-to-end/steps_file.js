
const CreateCasePage = require('./pages/CreateCase');
const LoginPage = require('./pages/Login.js');

// const I = actor();

module.exports = () => {
  return actor({

    loginAsSolicitor() {
      return LoginPage.loginAsSolicitor();
    },
    createCase() {
      return CreateCasePage.createNewCase();
    },

    async safeguardingAndRiskOfHarm() {
      await this.click('#next-step').selectByVisibleText('Safeguarding and risk of harm');
    }
  });
};
