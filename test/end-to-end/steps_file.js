const CreateCasePage = require('./pages/CreateCase');
const LoginPage = require('./pages/Login');
const PeopleInTheCasePage = require('./pages/PeopleInTheCase');
const UploadDocuments = require('./pages/UploadDocuments');

const { waitForPage } = require('./pages/common/common');
const { createCase } = require('./pages/create-case/create-case');
const { addNewDocument, uploadDocuments } = require('./pages/upload-documents/upload-documents');
const { goingToCourtSelectNoForAll, goingToCourtSelectYesForAll } = require('./pages/going-to-court/goint-to-court');
const generalHelper = require('./helpers/generalHelper');

module.exports = () => {
  return actor({
    createCase() {
      return CreateCasePage.createNewCase();
    },
    loginAsSolicitor() {
      return LoginPage.loginAsSolicitor();
    },
    createCase,
    waitForPage,
    addNewDocument,
    uploadDocuments,
    goingToCourtSelectNoForAll,
    goingToCourtSelectYesForAll,

    runPeopleInTheCaseEvent() {
      return PeopleInTheCasePage.runEventHappyPath();
    },
    triggerEvent(eventName) {
      return generalHelper.triggerEvent(eventName);
    },
    uploadDocuments() {
      return UploadDocuments.uploadDocuments();
    },
    async safeguardingAndRiskOfHarm() {
      await this.click('#next-step').selectByVisibleText('Safeguarding and risk of harm');
    }
  });
};
