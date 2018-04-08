const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { IN_PAIN_RESPONSE_ACTIONS } = require('../utils/actions');

module.exports = {

  [IN_PAIN_RESPONSE_ACTIONS.LOWER_BACK_ASSESSMENT]: (app) => {
    app.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT);
  },

  [IN_PAIN_RESPONSE_ACTIONS.LOWER_BACK_ASSESSMENT_CONTINUE]: (app) => {
    app.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT_CONTINUE);
  }
};
