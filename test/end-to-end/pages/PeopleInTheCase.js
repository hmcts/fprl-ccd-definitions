const I = actor();

module.exports = {

  fields: {
    addressList: 'select[id=ChildrenAddress_ChildrenAddress_addressList]',
    submit: 'button[type="submit"]'
  },

  async triggerEvent() {
    await I.triggerEvent('People in the case');
  },

  async fillWhereChildrenLivePage() {
    const reqResponseTime = 8;
    await I.waitForElement('#ChildrenAddress_ChildrenAddress_postcodeInput');
    await I.fillField('//input[@id="ChildrenAddress_ChildrenAddress_postcodeInput"]', 'B11LS');
    await I.click('Find address');
    await I.waitForElement(this.fields.addressList);
    await I.wait(reqResponseTime);
    await I.selectOption(this.fields.addressList, '1');
    await I.click(this.fields.submit);
  },

  async fillChildrenPage() {
    await I.waitForElement('#Children');
    await I.click('Add new');
  },

  async runEventHappyPath() {
    await this.triggerEvent();
  }
};
