const {IN_PAIN_RESPONSE} = require('../utils/strings');
const {INTENTS} = require('../utils/intents');

const IMG_URL_MEDIA = 'https://i.imgur.com/pEprUGd.jpg';
// const MEDIA_SOURCE = 'https://storage.googleapis.com/backmechanic/BM-test-3-audio.mp3';

module.exports = {

  [INTENTS.STOMACH_GROUND_TEST_REQUEST]: (conv) => {
    let painIntensity = conv.arguments.get('painintensity');
    conv.data.painintensity = painIntensity;

    conv.ask(new BasicCard({
      text: `${painIntensity}, got it. ${IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST}`,
      subtitle: 'Pain Intensity',
      title: `Pain Intensity: ${painIntensity}`,
      image: new Image({
        url: IMG_URL_MEDIA,
        alt: 'Image alternate text'
      })
    }));
  }

  // [IN_PAIN_RESPONSE_ACTIONS.STOMACH_GROUND_TEST_TIMER]: (app) => {
  //   app.ask(app.buildRichResponse()
  //     .addSimpleResponse(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST_TIMER)
  //     .addMediaResponse(app.buildMediaResponse()
  //       .addMediaObjects(
  //         app.buildMediaObject('30 second counter', MEDIA_SOURCE)
  //           .setImage(IMG_URL_MEDIA, app.Media.ImageType.ICON)
  //       ))
  //     .addSuggestions(intentSuggestions)
  //   );
  // },
  //
  // [IN_PAIN_RESPONSE_ACTIONS.STOMACH_GROUND_TEST_TIMER_CHECK]: (app) => {
  //   app.ask(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST_CHECK);
  // },
  //
  // [IN_PAIN_RESPONSE_ACTIONS.STOMACH_GROUND_TEST_TIMER_CONTINUE]: (app) => {
  //   app.ask(app.buildRichResponse()
  //     .addSimpleResponse(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_CONTINUE)
  //     .addMediaResponse(app.buildMediaResponse()
  //       .addMediaObjects(
  //         app.buildMediaObject('2 min 30 second counter', MEDIA_SOURCE)
  //           .setImage(IMG_URL_MEDIA, app.Media.ImageType.ICON)
  //       ))
  //     .addSuggestions(intentSuggestions)
  //   );
  // },
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
