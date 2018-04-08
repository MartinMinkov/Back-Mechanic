const { GENERAL } = require('../utils/strings');
const { GENERAL_ACTIONS } = require('../utils/actions');

module.exports = {
  [GENERAL_ACTIONS.DEFAULT]: (app) => {
    app.ask(GENERAL.DEFAULT);
  },

  [GENERAL_ACTIONS.UNKNOWN]: (app) => {
    app.ask(GENERAL.UNKNOWN);
  }
};
