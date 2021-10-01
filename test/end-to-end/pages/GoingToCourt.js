const I = actor();

function selectNo(field) {
  I.click(`${field}_No`);
}

function selectYes(field) {
  I.click(`${field}_Yes`);
}

module.exports = {

  fields: {
    isWelshNeeded: 'IsWelshNeeded',
    isInterpreterNeeded: 'IsInterpreterNeeded',
    isDisabilityPresent: 'IsDisabilityPresent',
    isSpecialArrangementsRequired: 'IsSpecialArrangementsRequired',
    isIntermediaryNeeded: 'IsIntermediaryNeeded',
    whoNeedsWelsh: 'WelshNeeds_0_WhoNeedsWelsh',
    welshSpokenSpoken: 'WelshNeeds_0_SpokenOrWritten-Spoken',
    welshWritten: 'WelshNeeds_0_SpokenOrWritten-Written',
    welshSpokenAndWritten: 'WelshNeeds_0_SpokenOrWritten-Both',
    submit: 'button[type="submit"]'
  },

  async triggerEvent() {
    await I.triggerEvent('Going to court');
  },

  async goingToCourtSelectNoForAll() {
    await I.waitForPage('h1', 'Going to court');

    selectNo('IsWelshNeeded');
    selectNo('IsInterpreterNeeded');
    selectNo('IsDisabilityPresent');
    selectNo('IsSpecialArrangementsRequired');
    selectNo('IsIntermediaryNeeded');

    I.wait('5');
    I.click('Continue');

    I.waitForText('Submit', '30');
    I.click('Submit');
  },

  async goingToCourtSelectYesForAll() {
    await I.waitForPage('h1', 'Going to court');

    selectYes(this.fields.isWelshNeeded);
    I.wait('1');
    I.see('Welsh needs');
    this.fillField(this.fields.whoNeedsWelsh, 'Joe Doe');
    I.click('WelshNeeds_0_SpokenOrWritten-Spoken');
    I.click('WelshNeeds_0_SpokenOrWritten-Written');
    I.click('WelshNeeds_0_SpokenOrWritten-Both');

    selectYes('IsInterpreterNeeded');
    I.wait('1');
    I.see('Interpreter needs');
    I.click('InterpreterNeeds_0_Party-Applicant');
    I.click('InterpreterNeeds_0_Party-Respondent');
    I.click('InterpreterNeeds_0_Party-Other');
    this.fillField('InterpreterNeeds_0_Name', 'Person One');
    this.fillField('InterpreterNeeds_0_Language', 'Polish');

    selectYes('IsDisabilityPresent');
    I.wait('1');
    I.see('Describe the adjustments that the court needs to make.');
    this.fillField('AdjustmentsRequired', 'Example text - adjustment');

    selectYes('IsSpecialArrangementsRequired');
    I.wait('1');
    I.see('Give details of the special arrangements that are required.');
    this.fillField('SpecialArrangementsRequired', 'Example text - arrangements');

    selectYes('IsIntermediaryNeeded');
    I.wait('1');
    I.see('Set out the reasons that an intermediary is required.');
    this.fillField('ReasonsForIntermediary', 'Example text - intermediary');

    I.wait('5');
    I.click('Continue');

    I.waitForText('Submit', '30');
    I.click('Submit');
  },

  async runEventHappyPath() {
    await this.triggerEvent();
    await this.goingToCourtSelectNoForAll();

    await I.submitEvent();
    await I.amOnHistoryPageWithSuccessNotification();
  }
};
