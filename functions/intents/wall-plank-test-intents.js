const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {

  [INTENTS.WALL_PLANK_TEST_ABDOMINAL_BRACING_REQUEST]: (conv) => {
    conv.contexts.set(CONTEXTS.WALL_PLANK_TEST_CONTINUE, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.WALL_PLANK_TEST_ABDOMINAL_BRACING_REQUEST);
  },

  [INTENTS.WALL_PLANK_TEST_ABDOMINAL_BRACING_CONTINUED_REQUEST]: (conv) => {
    conv.ask(NOT_IN_PAIN_RESPONSE.WALL_PLANK_TEST_ABDOMINAL_BRACING_CONTINUED_REQUEST);
  }
};
