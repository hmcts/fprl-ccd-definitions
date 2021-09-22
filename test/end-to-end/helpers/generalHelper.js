// eslint-disable-next-line no-undef
const { Helper } = codeceptjs;

const fields = {
  eventList: 'select[id="next-step"]',
  submit: 'button[type="submit"]'
};

class GeneralHelper extends Helper {
  async triggerEvent(eventName) {
    const { Puppeteer } = this.helpers;
    await Puppeteer.waitForElement(fields.eventList);
    await Puppeteer.selectOption(fields.eventList, eventName);
    await Puppeteer.click(fields.submit);
  }
}

module.exports = GeneralHelper;
