const { GENERAL } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {
  [INTENT_ACTIONS.DEFAULT_ACTION]: (app) => {
    app.ask(GENERAL.DEFAULT);
  },

  [INTENT_ACTIONS.UNKNOWN_ACTION]: (app) => {
    app.ask(GENERAL.UNKNOWN);
  }
};
