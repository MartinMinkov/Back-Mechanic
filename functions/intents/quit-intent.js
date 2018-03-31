const strings = require('../strings');

module.exports = {

  'input.quit': (app) => {
    app.tell(strings.general.QUIT);
  }
};
