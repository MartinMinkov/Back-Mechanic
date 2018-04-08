const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { NOT_IN_PAIN_RESPONSE_ACTIONS } = require('../utils/actions');

const IMG_URL_MEDIA = 'https://qph.fs.quoracdn.net/main-qimg-e59a1cd1d7ca0eef2b71da5fe69bac87';

module.exports = {

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_REQUEST]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_REQUEST);
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE)
      .addBasicCard(app.buildBasicCard()
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_NEUTRAL_SPINE_REQUEST]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_NEUTRAL_SPINE_REQUEST)
      .addBasicCard(app.buildBasicCard()
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_FLEXION_SPINE_REQUEST]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_REQUEST)
      .addBasicCard(app.buildBasicCard()
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_FLEXION_SPINE_FLEXION_CHIN_REQUEST]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_FLEXION_CHIN_REQUEST);
  },

  [NOT_IN_PAIN_RESPONSE_ACTIONS.SEATED_COMPRESSION_TEST_FLEXION_SPINE_EXTENSION_CHIN_REQUEST]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_EXTENSION_CHIN_REQUEST);
  }
};
