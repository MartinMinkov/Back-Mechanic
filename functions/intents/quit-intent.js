const strings = require('../strings');
const { sendResponse } = require('../utils');

function intentQuit (args) {
  sendResponse(strings.general.QUIT, args.response);
}

module.exports = {
  intentQuit
};
