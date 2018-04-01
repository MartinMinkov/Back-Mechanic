const strings = require('../utils/strings');
const { sendResponse } = require('../helpers/utils');

function intentInPainResponse (args) {
  const painIntensity = (args.request.body.queryResult.parameters.painintensity)
    ? args.request.body.queryResult.parameters.painintensity : 0;

  sendResponse(`${painIntensity}, ${strings.IN_PAIN_RESPONSE.STOMACH_GROUND_TEST_REQUEST}`, args.response);
}

module.exports = {
  intentInPainResponse
};
