const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_REQUEST]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_REQUEST);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_CONTINUE]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_CONTINUE);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_REPEAT]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_REPEAT);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_REQUEST]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_REQUEST);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_LEFT]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_LEFT);
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_LEFT_RESULTS]: (app) => {
    app.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_LEFT_RESULTS);
  }
};