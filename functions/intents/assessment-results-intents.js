const { ASSESSMENT_RESULTS } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');

module.exports = {

  [INTENTS.ASSESSMENT_RESULTS_SPINAL_FLEXION]: (conv) => {
    conv.user.storage.painintensity = {};
    conv.close(ASSESSMENT_RESULTS.SPINAL_FLEXION);
  },

  [INTENTS.ASSESSMENT_RESULTS_FACET_JOIN_INVOLVEMENT]: (conv) => {
    conv.user.storage.painintensity = {};
    conv.close(ASSESSMENT_RESULTS.FACET_JOINT_INVOLVEMENT);
  },

  [INTENTS.ASSESSMENT_RESULTS_NECK_FLEXION]: (conv) => {
    conv.user.storage.painintensity = {};
    conv.close(ASSESSMENT_RESULTS.NECK_FLEXION);
  }
};
