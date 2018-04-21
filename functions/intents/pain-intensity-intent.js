const { GENERAL } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {
  [INTENTS.PAIN_INTENSITY_REQUEST]: (conv) => {
    conv.contexts.set(CONTEXTS.PAIN_INTENSITY, 1);
    conv.ask(GENERAL.PAIN_REQUEST);
  }
};
