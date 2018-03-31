const strings = require('../strings');

module.exports = {

  'input.stomach.ground.test': (app) => {
    app.ask(app.getArgument('pain-intensity') + ', ' + strings.InPainResponse.STOMACH_GROUND_TEST_REQUEST);
  },

  'input.stomach.ground.test.confirmation': (app) => {
    if (app.getUserConfirmation()) {
      app.ask('Yes!');
    } else {
      app.ask('Bye!');
    }
  }
};
