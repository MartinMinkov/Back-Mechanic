const { NOT_IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

const {
  BasicCard,
  Image
} = require('actions-on-google');

const IMG_URL_MEDIA = 'https://qph.fs.quoracdn.net/main-qimg-e59a1cd1d7ca0eef2b71da5fe69bac87';

module.exports = {

  [INTENTS.SEATED_COMPRESSION_REST_REQUEST]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_TEST, 1);
    conv.contexts.set(CONTEXTS.HEEL_DROP_TEST_REQUEST, 1);
    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_REQUEST);
  },

  [INTENTS.SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_NEUTRAL_SPINE_TEST, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE);
    conv.ask(new BasicCard({
      text: 'Seated Compression Test',
      subtitle: 'Subtitle: Seated Compression Test',
      title: 'Title: Seated Compression Test',
      image: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Image alternate text'
      })
    }));
  },

  [INTENTS.SEATED_COMPRESSION_TEST_CHAIR_NEUTRAL_SPINE_TEST]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_FLEXED_SPINE_TEST, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_NEUTRAL_SPINE_REQUEST);
    conv.ask(new BasicCard({
      text: 'Seated Compression Test',
      subtitle: 'Subtitle: Seated Compression Test',
      title: 'Title: Seated Compression Test',
      image: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Image alternate text'
      })
    }));
  },

  [INTENTS.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_TEST]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_FLEXED_SPINE_TEST, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_REQUEST);
    conv.ask(new BasicCard({
      text: 'Seated Compression Test',
      subtitle: 'Subtitle: Seated Compression Test',
      title: 'Title: Seated Compression Test',
      image: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Image alternate text'
      })
    }));
  },

  [INTENTS.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_CHIN_FLEXION_TEST]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_FLEXED_SPINE_CHIN_TEST, 1);
    conv.contexts.set(CONTEXTS.HEEL_DROP_TEST_REQUEST, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_FLEXION_CHIN_REQUEST);
  },

  [INTENTS.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_CHIN_EXTENSION_TEST]: (conv) => {
    conv.contexts.set(CONTEXTS.SEATED_COMPRESSION_TEST_NEXT, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_EXTENSION_CHIN_REQUEST);
  },

  [INTENTS.SEATED_COMPRESSION_TEST_NEXT_TEST]: (conv) => {
    conv.contexts.set(CONTEXTS.HEEL_DROP_TEST_REQUEST, 1);

    conv.ask(NOT_IN_PAIN_RESPONSE.SEATED_COMPRESSION_TEST_AVOID_PAIN_POSITIONS);
  }
};
