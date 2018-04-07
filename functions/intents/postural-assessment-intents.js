const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT]: (app) => {
    app.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT_CONTINUE]: (app) => {
    app.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT_CONTINUE);
  }
};
