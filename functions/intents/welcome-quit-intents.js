const { GENERAL } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {
  [INTENTS.WELCOME]: (conv) => {
    conv.contexts.set(CONTEXTS.PAIN_REQUEST, 1);
    conv.ask(GENERAL.GREETING);
  }
};
