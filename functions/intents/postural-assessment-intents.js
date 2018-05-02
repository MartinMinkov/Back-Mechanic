const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {

  [INTENTS.LOWER_BACK_ASSESSMENT]: (conv) => {
    conv.contexts.set(CONTEXTS.POSTURAL_ASSESSMENT, 1);
    conv.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT);
  },

  [INTENTS.LOWER_BACK_ASSESSMENT_CONTINUE]: (conv) => {
    conv.contexts.set(CONTEXTS.POSTURAL_ASSESSMENT, 1);
    conv.contexts.set(CONTEXTS.ASSESSMENT_RESULTS, 1);
    conv.ask(IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT_CONTINUE);
  }
};
