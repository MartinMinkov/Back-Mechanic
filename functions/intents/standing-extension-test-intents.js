const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {

  [INTENTS.STANDING_EXTENSION_TEST_REQUEST]: (conv) => {
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_TEST, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_REQUEST);
  },

  [INTENTS.STANDING_EXTENSION_TEST_CONTINUE]: (conv) => {
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_TEST_REPEAT, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_CONTINUE);
  },

  [INTENTS.STANDING_EXTENSION_TEST_REPEAT]: (conv) => {
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_SIDE, 1);
    conv.contexts.set(CONTEXTS.PAIN_REQUEST, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_REPEAT);
  },

  [INTENTS.STANDING_EXTENSION_TEST_SIDE_REQUEST]: (conv) => {
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_LEFT_RIGHT_TEST, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_REQUEST);
  },

  [INTENTS.STANDING_EXTENSION_TEST_SIDE_LEFT_RIGHT]: (conv) => {
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_LEFT_RIGHT_RESULTS, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_LEFT);
  },

  [INTENTS.STANDING_EXTENSION_TEST_SIDE_LEFT_RIGHT_RESULTS]: (conv) => {
    conv.contexts.set(CONTEXTS.ASSESSMENT_RESULTS, 1);
    conv.contexts.set(CONTEXTS.STANDING_EXTENSION_TEST, 1);
    conv.ask(IN_PAIN_RESPONSE.STANDING_EXTENSION_TEST_SIDE_LEFT_RESULTS);
  }
};
