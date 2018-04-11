const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { NOT_IN_PAIN_RESPONSE_ACTIONS } = require('../utils/actions');

module.exports = {
  [NOT_IN_PAIN_RESPONSE_ACTIONS.HEEL_DROP_TEST_REQUEST]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_REQUEST);
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.HEEL_DROP_TEST_NECK_FLEXION]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_NECK_FLEXION);
  }
};
