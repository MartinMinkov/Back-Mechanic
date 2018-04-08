const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENT_ACTIONS } = require('../utils/actions');

const IMG_URL_MEDIA = 'https://qph.fs.quoracdn.net/main-qimg-e59a1cd1d7ca0eef2b71da5fe69bac87';

module.exports = {

  [INTENT_ACTIONS.NOT_IN_PAIN_RESPONSE_SEATED_COMPRESSION_TEST_REQUEST]: (app) => {
    app.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_REQUEST);
  },

  [INTENT_ACTIONS.NOT_IN_PAIN_RESPONSE_SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE)
      // Create a basic card and add it to the rich response
      .addBasicCard(app.buildBasicCard() // Note the two spaces before '\n' required for a
      // line break to be rendered in the card
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  },

  [INTENT_ACTIONS.NOT_IN_PAIN_RESPONSE_SEATED_COMPRESSION_TEST_NEUTRAL_SPINE_REQUEST]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_NEUTRAL_SPINE_REQUEST)
      // Create a basic card and add it to the rich response
      .addBasicCard(app.buildBasicCard() // Note the two spaces before '\n' required for a
      // line break to be rendered in the card
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  },

  [INTENT_ACTIONS.NOT_IN_PAIN_RESPONSE_SEATED_COMPRESSION_TEST_FLEXED_SPINE_REQUEST]: (app) => {
    app.ask(app.buildRichResponse()
      .addSimpleResponse(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXED_SPINE_REQUEST)
      // Create a basic card and add it to the rich response
      .addBasicCard(app.buildBasicCard() // Note the two spaces before '\n' required for a
      // line break to be rendered in the card
        .setSubtitle('Seated Compression Test')
        .setTitle('Seated Compression Test')
        .setImage(IMG_URL_MEDIA, 'Seated Compression Test Test'))
    );
  }
};
