const { GENERAL } = require('../utils/strings');
const { IN_PAIN_RESPONSE_ACTIONS } = require('../utils/actions');

module.exports = {
  [IN_PAIN_RESPONSE_ACTIONS.PAIN_INTENSITY_ACTION]: (app) => {
    app.ask(GENERAL.PAIN_REQUEST);
  }
};
