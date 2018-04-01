const strings = require('../strings');
const { sendResponse } = require('../utils');

function intentInPainResponse (args) {
  const painIntensity = (args.request.body.queryResult.parameters.painintensity)
    ? args.request.body.queryResult.parameters.painintensity : 0;

  sendResponse(`${painIntensity}, ${strings.InPainResponse.STOMACH_GROUND_TEST_REQUEST}`, args.response);
}

module.exports = {
  intentInPainResponse
};
