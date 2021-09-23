// eslint-disable-next-line no-undef
const { Helper } = codeceptjs;

const fields = {
  eventList: 'select[id="next-step"]',
  submit: 'button[type="submit"]'
};

class GeneralHelper extends Helper {
  async amOnHistoryPageWithSuccessNotification() {
    const { Puppeteer } = this.helpers;
    await Puppeteer.waitForText('History');
    await Puppeteer.waitForElement('i.icon-tick');
  }

  async selectPostCodeLookupAddress(locator, postcode) {
    const searchResponseTime = 3;
    const { Puppeteer } = this.helpers;
    const postcodeInputLocator = `//input[@id="${locator}_postcodeInput"]`;
    const addressListLocator = `select[id="${locator}_addressList"]`;

    await Puppeteer.waitForElement(postcodeInputLocator);
    await Puppeteer.fillField(postcodeInputLocator, postcode);
    await Puppeteer.click('Find address');
    await Puppeteer.waitForElement(addressListLocator);
    await Puppeteer.wait(searchResponseTime);
    await Puppeteer.selectOption(addressListLocator, '1: Object');
  }

  async submitEvent() {
    const { Puppeteer } = this.helpers;
    await Puppeteer.waitForText('Check your answers');
    await Puppeteer.click('Submit');
  }

  async triggerEvent(eventName) {
    const { Puppeteer } = this.helpers;
    await Puppeteer.waitForElement(fields.eventList);
    await Puppeteer.selectOption(fields.eventList, eventName);
    await Puppeteer.click(fields.submit);
  }
}

module.exports = GeneralHelper;
