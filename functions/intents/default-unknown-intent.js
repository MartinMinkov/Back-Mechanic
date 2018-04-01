const strings = require('../utils/strings');
const { sendResponse } = require('../helpers/utils');

function intentDefault (args) {
  sendResponse(strings.GENERAL.DEFAULT, args.response);
}

function intentUnknown (args) {
  sendResponse(strings.GENERAL.UNKNOWN, args.response);
}

module.exports = {
  intentDefault,
  intentUnknown
};
