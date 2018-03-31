const strings = require('../strings');

module.exports = {

  'input.ask.for.pain.intensity': (app) => {
    app.ask(strings.general.PAIN_REQUEST);
  },

  'ask.for.pain.intensity.confirmation': (app) => {
    if (app.getUserConfirmation()) {
      app.ask('Yes!');
    } else {
      app.ask('Bye!');
    }
  }
};
