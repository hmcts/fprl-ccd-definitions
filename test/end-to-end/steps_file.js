
const CreateCasePage = require('./pages/CreateCase');
const LoginPage = require('./pages/Login');
const PeopleInTheCasePage = require('./pages/PeopleInTheCase');

const generalHelper = require('./helpers/generalHelper');


module.exports = () => {
  return actor({

    createCase() {
      return CreateCasePage.createNewCase();
    },
    loginAsSolicitor() {
      return LoginPage.loginAsSolicitor();
    },
    runPeopleInTheCaseEvent() {
      return PeopleInTheCasePage.runEventHappyPath();
    },
    triggerEvent(eventName) {
      return generalHelper.triggerEvent(eventName);
    },
    async safeguardingAndRiskOfHarm() {
      await this.click('#next-step').selectByVisibleText('Safeguarding and risk of harm');
    }
  });
};
