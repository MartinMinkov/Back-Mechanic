const { GENERAL } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');

module.exports = {
  [INTENTS.PAIN_INTENSITY_REQUEST]: (conv) => {
    conv.contexts.set('pain-intensity', 1);
    conv.ask(GENERAL.PAIN_REQUEST);
  }
};
