const { IN_PAIN_RESPONSE } = require('../utils/strings');
const { INTENTS } = require('../utils/intents');
const { CONTEXTS } = require('../utils/contexts');

const {
  BasicCard,
  Image,
  MediaObject,
  Suggestions
} = require('actions-on-google');

const IMG_URL_MEDIA = 'https://i.imgur.com/pEprUGd.jpg';
const MEDIA_SOURCE = 'https://storage.googleapis.com/backmechanic/BM-test-3-audio.mp3';

module.exports = {

  [INTENTS.STOMACH_GROUND_TEST_REQUEST]: (conv, {painintensity}) => {
    conv.contexts.set(CONTEXTS.STOMACH_GROUND_TEST_TIMER, 1);
    conv.data.painintensity = painintensity;

    conv.ask(`${painintensity}, got it. ${IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST}`);
    conv.ask(new BasicCard({
      text: `Pain Intensity: ${painintensity}`,
      subtitle: 'Subtitle: Stomach Ground Test',
      title: 'Title: Stomach Ground Test',
      image: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Image alternate text'
      })
    }));
  },

  [INTENTS.STOMACH_GROUND_TEST_REQUEST_TIMER]: (conv) => {
    conv.contexts.set(CONTEXTS.STOMACH_GROUND_TEST_TIMER, 1);
    conv.ask(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST_TIMER);
    conv.ask(new MediaObject({
      name: '30 Second Timer',
      url: MEDIA_SOURCE,
      description: '30 Second Timer',
      icon: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Media icon'
      })
    }));
    conv.ask(new Suggestions('Test Suggestion'));
  },

  [INTENTS.STOMACH_GROUND_TEST_REQUEST_TIMER_CHECK]: (conv) => {
    conv.contexts.set(CONTEXTS.STOMACH_GROUND_TEST_TIMER_END, 1);
    conv.ask(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST_CHECK);
  },

  [INTENTS.STOMACH_GROUND_TEST_REQUEST_TIMER_CONTINUE]: (conv) => {
    conv.contexts.set(CONTEXTS.STOMACH_GROUND_TEST_TIMER_END_HIP_HINGE, 1);
    conv.ask(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_CONTINUE);
    conv.ask(new MediaObject({
      name: '2 Minute 30 Second Timer',
      url: MEDIA_SOURCE,
      description: '2 Minute 30 Second Timer',
      icon: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Media icon'
      })
    }));
    conv.ask(new Suggestions('Test Suggestion'));
  }
  //
  // [IN_PAIN_RESPONSE_ACTIONS.STOMACH_GROUND_TEST_HIP_HINGE]: (app) => {
  //   app.ask(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_TRANSITION_HIP_HINGE);
  // },
  //
  // [IN_PAIN_RESPONSE_ACTIONS.STOMACH_GROUND_TEST_COMPARISON]: (app) => {
  //   let painIntensity = app.data.painintensity;
  //   let painImprovement = app.getArgument('painimprovement');
  //   if (painIntensity > painImprovement) {
  //     let painComparison = Math.round(((painIntensity - painImprovement) / 10) * 100);
  //
  //     app.ask(`Previous to this test you said ${painIntensity}. We've already reduced the pain by
  //     ${painComparison}%! ${IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT_REQUEST}`);
  //   } else {
  //     let painComparison = Math.round(((painImprovement - painIntensity) / 10) * 100);
  //
  //     app.ask(`Previous to this test you said ${painIntensity}. Your pain has increased by
  //     ${painComparison}%. ${IN_PAIN_RESPONSE.LOWER_BACK_ASSESSMENT_REQUEST}`);
  //   }
  // }
};
