const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

module.exports = {
  [INTENTS.HEEL_DROP_TEST_REQUEST]: (conv, { seatedCompressionAnswer }) => {
    const seatedCompressionContext = conv.contexts.get(CONTEXTS.SEATED_COMPRESSION_FLEXED_SPINE_CHIN_TEST);

    console.log('Seated Compression Answer: ' + seatedCompressionAnswer);
    console.log('Seated Compression Context: ' + seatedCompressionContext);

    if (seatedCompressionAnswer === 'no' && seatedCompressionContext) {
      console.log('LOOKING FOR THIS INSIDE');
      conv.contexts.set(CONTEXTS.WALL_PLANK_TEST_ABDOMINAL_BRACING_REQUEST, 1);
    } else {
      conv.contexts.set(CONTEXTS.HEEL_DROP_TEST_NECK_FLEXION, 1);
    }
    conv.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_REQUEST);
  },

  [INTENTS.HEEL_DROP_TEST_NECK_FLEXION]: (conv) => {
    conv.contexts.set(CONTEXTS.ASSESSMENT_RESULTS_NECK_FLEXION, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.HEEL_DROP_TEST_NECK_FLEXION);
  }
};
