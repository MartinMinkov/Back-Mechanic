const { ASSESSMENT_RESULTS } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

module.exports = {

  [INTENT_ACTIONS.ASSESSMENT_RESULTS_SPINAL_FLEXION]: (app) => {
    app.tell(ASSESSMENT_RESULTS.SPINAL_FLEXION);
  },

  [INTENT_ACTIONS.ASSESSMENT_RESULTS_FACET_JOINT_INVOLVEMENT]: (app) => {
    app.tell(ASSESSMENT_RESULTS.FACET_JOINT_INVOLVEMENT);
  }
};
