const { GENERAL } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {
  [INTENT_ACTIONS.WELCOME_ACTION]: (app) => {
    app.ask(GENERAL.GREETING);
  },

  [INTENT_ACTIONS.QUIT_ACTION]: (app) => {
    app.tell(GENERAL.QUIT);
  }
};
