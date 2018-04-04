const { GENERAL } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {
  [INTENT_ACTIONS.PAIN_INTENSITY_ACTION]: (app) => {
    app.ask(GENERAL.PAIN_REQUEST);
  }
};
