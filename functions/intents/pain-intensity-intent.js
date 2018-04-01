const strings = require('../strings');
const { sendResponse } = require('../utils');

function intentPainIntensity (args) {
  sendResponse(strings.general.PAIN_REQUEST, args.response);
}

module.exports = {
  intentPainIntensity
};
