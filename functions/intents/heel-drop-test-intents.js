const {NOT_IN_PAIN_RESPONSE} = require('../utils/strings');
const {NOT_IN_PAIN_RESPONSE_ACTIONS} = require('../utils/actions');

module.exports = {
  [NOT_IN_PAIN_RESPONSE_ACTIONS.HEEL_DROP_TEST_REQUEST]: (app) => {
    const seatedCompressionAnswer = app.getArgument('seated-compression-answer');
    const seatedCompressionContext = app.getContext('seated-compression-flexed-spine-chin-test');

    if (seatedCompressionAnswer === 'no' && seatedCompressionContext) {
      app.setContext('wall-plank-test-abdominal-bracing-request', 1);
    } else {
      app.setContext('heel-drop-test-neck-flexion', 1);
    }
    app.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_REQUEST);
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.HEEL_DROP_TEST_NECK_FLEXION]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_NECK_FLEXION);
  }
};
