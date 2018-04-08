const { ASSESSMENT_RESULTS } = require('../utils/strings');
const { ASSESSMENT_RESULTS_ACTIONS } = require('../utils/actions');

module.exports = {

  [ASSESSMENT_RESULTS_ACTIONS.SPINAL_FLEXION]: (app) => {
    app.tell(ASSESSMENT_RESULTS.SPINAL_FLEXION);
  },

  [ASSESSMENT_RESULTS_ACTIONS.FACET_JOINT_INVOLVEMENT]: (app) => {
    app.tell(ASSESSMENT_RESULTS.FACET_JOINT_INVOLVEMENT);
  }
};
