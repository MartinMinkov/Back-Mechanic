const { GENERAL } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');

module.exports = {
  [INTENTS.WELCOME]: (conv) => {
    conv.contexts.set('pain-request', 1);
    conv.ask(GENERAL.GREETING);
  }
};
