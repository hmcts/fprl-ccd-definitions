/* eslint-disable no-invalid-this, require-await */

async function uploadDocuments() {
  const I = this;
  I.selectOption('select[id="next-step"]', 'Upload documents');
  I.click('Go');
  I.waitForPage('h1', 'Upload documents');

  let field = 'ContactOrderDocumentsUploaded';
  I.click('Add new', { css: `#${field}>div>button` });
  I.attachFile(`input[id="${field}_value"]`, '../resource/dummy.pdf');

  field = 'C8FormDocumentsUploaded';
  I.click('Add new', { css: `#${field}>div>button` });
  I.attachFile(`input[id="${field}_value"]`, '../resource/dummy.pdf');

  field = 'OtherDocumentsUploaded';
  I.click('Add new', { css: `#${field}>div>button` });
  I.attachFile(`input[id="${field}_value"]`, '../resource/dummy.pdf');

  I.wait('5');

  I.click('Continue');

  I.waitForText('Submit', '30');
  I.click('Submit');
}

module.exports = { uploadDocuments };
