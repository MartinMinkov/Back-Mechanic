const strings = require('../utils/strings');
const { sendResponse } = require('../helpers/utils');

function intentWelcome (args) {
  sendResponse(strings.GENERAL.GREETING, args.response);
}

function intentQuit (args) {
  sendResponse(strings.GENERAL.QUIT, args.response);
}

module.exports = {
  intentWelcome,
  intentQuit
};
