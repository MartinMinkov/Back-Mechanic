const { GENERAL } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');

module.exports = {
  [INTENTS.WELCOME]: (conv) => {
    conv.ask(GENERAL.GREETING);
  }
};
