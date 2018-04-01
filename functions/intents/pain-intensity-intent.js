const strings = require('../utils/strings');
const { sendResponse } = require('../helpers/utils');

function intentPainIntensity (args) {
  sendResponse(strings.GENERAL.PAIN_REQUEST, args.response);
}

module.exports = {
  intentPainIntensity
};
