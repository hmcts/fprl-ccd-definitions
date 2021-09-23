/* eslint-disable no-invalid-this, require-await */

function selectNo(field) {
  const I = this;
  I.click(`${field}_No`);
}

async function goingToCourtSelectNoForAll() {
  const I = this;
  I.selectOption('select[id="next-step"]', 'Going to court');
  I.click('Go');
  I.waitForPage('h1', 'Going to court');

  selectNo('IsWelshNeeded');
  selectNo('IsInterpreterNeeded');
  selectNo('IsDisabilityPresent');
  selectNo('IsSpecialArrangementsRequired');
  selectNo('IsIntermediaryNeeded');

  I.wait('5');
  I.click('Continue');

  I.waitForText('Submit', '30');
  I.click('Submit');
}

module.exports = { goingToCourtSelectNoForAll };
