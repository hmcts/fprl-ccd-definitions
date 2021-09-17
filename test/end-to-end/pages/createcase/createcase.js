const parentName = 'TestParent';
const childName = 'TestChild';


module.exports = () => {
  return actor({
    loginToAsSolicitor() {
      this.amOnPage(`${process.env.CCD_URL}`);
      this.see('Sign in');
      this.fillField('username', 'fprl_caseworker_solicitor@mailinator.com\t');
      this.fillField('password', 'caseworker-privatelaw-solicitor');
      this.click('Sign in');
      this.see('');
    },
    createCase() {
      this.click('Create case');
      this.click('Start');
      this.waitForElement('#ApplicantName');
      this.fillField('Applicant name', parentName);
      this.fillField('Child name', childName);
      this.click('Continue');
      this.click('Submit');
    },
    uploadConfig(path) {
      this.click('Import Case Definition');
      this.attachFile('file', path);
      this.click('Submit');
    }
  });
};
