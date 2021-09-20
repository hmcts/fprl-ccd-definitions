const parentName = 'TestParent';
const childName = 'TestChild';

function createCase() {
  // eslint-disable-next-line  no-invalid-this
  const I = this;

  I.waitForElement('ul > li:nth-child(2) > a');
  I.click('ul > li:nth-child(2) > a');
  I.click('Start');
  I.waitForElement('h1');
  I.fillField('//input[@id="ApplicantName"]', parentName);
  I.fillField('//input[@id="ChildName"]', childName);
  I.click('Continue');
  I.see('Check your answers');
  I.click('Submit');
}

module.exports = { createCase };
