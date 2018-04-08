const { GENERAL } = require('../utils/strings');
const { GENERAL_ACTIONS } = require('../utils/actions');

module.exports = {
  [GENERAL_ACTIONS.WELCOME]: (app) => {
    app.ask(GENERAL.GREETING);
  },

  [GENERAL_ACTIONS.QUIT]: (app) => {
    app.tell(GENERAL.QUIT);
  }
};
