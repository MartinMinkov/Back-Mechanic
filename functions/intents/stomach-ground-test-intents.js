const {IN_PAIN_RESPONSE} = require('../utils/strings');
const {INTENT_ACTIONS} = require('../utils/actions');

const intentSuggestions = [
  'Media'
];

module.exports = {

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_TEST_ACTION]: (app) => {
    let painIntensity = app.getArgument('painintensity');

    app.ask(app.buildRichResponse()
      .addSimpleResponse(`${painIntensity}, ${IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST}`)
      // Create a basic card and add it to the rich response
      .addBasicCard(app.buildBasicCard(`Pain Intensity: ${painIntensity}`) // Note the two spaces before '\n' required for a
      // line break to be rendered in the card
        .setSubtitle('Stomach Ground Test')
        .setTitle('Stomach Ground Test')
        .setImage('https://i.imgur.com/pEprUGd.jpg', 'Stomach Ground Test'))
    );
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_TEST_TIMER]: (app) => {
    const IMG_URL_MEDIA = 'http://storage.googleapis.com/automotive-media/album_art.jpg';
    const MEDIA_SOURCE = 'https://storage.googleapis.com/backmechanic/BM-test-3-audio.mp3';
    app.ask(app.buildRichResponse()
      .addSimpleResponse(IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST_TIMER)
      .addMediaResponse(app.buildMediaResponse()
        .addMediaObjects(
          app.buildMediaObject('30 second counter', MEDIA_SOURCE)
            .setImage(IMG_URL_MEDIA, app.Media.ImageType.ICON)
        ))
      .addSuggestions(intentSuggestions)
    );
  },

  [INTENT_ACTIONS.IN_PAIN_RESPONSE_TEST_STATUS]: (app) => {
    const status = app.getMediaStatus();
    const simpleResponse = status === app.Media.Status.FINISHED
      ? 'Hope you enjoyed the tunes!'
      : 'Unknown media status received.';
    app.ask(app.buildRichResponse()
      .addSimpleResponse(simpleResponse)
      .addSuggestions(intentSuggestions));
  }
};
