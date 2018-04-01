const strings = require('../strings');
const { sendResponse } = require('../utils');

function intentWelcome (args) {
  sendResponse(strings.general.GREETING, args.response);
}

module.exports = {
  intentWelcome
};
