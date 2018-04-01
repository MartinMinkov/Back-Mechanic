// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Dialogflow fulfillment getting started guide:
// https://dialogflow.com/docs/how-tos/getting-started-fulfillment

'use strict';

const functions = require('firebase-functions'); // Cloud Functions for Firebase library

const { intentWelcome } = require('./intents/welcome-intent');
const { intentQuit } = require('./intents/quit-intent');
const { intentPainIntensity } = require('./intents/pain-intensity-intent');
const { intentInPainResponse } = require('./intents/in-pain-response-intent');

exports.backmechanic = functions.https.onRequest((request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  // An action is a string used to identify what needs to be done in fulfillment
  let action = (request.body.queryResult.action) ? request.body.queryResult.action : 'default';

  console.log('Dialogflow response:' + response);
  console.log('Dialogflow action: ' + action);

  const actionHandlers = {
    'input.welcome': intentWelcome,

    'input.quit': intentQuit,

    'input.ask.for.pain.intensity': intentPainIntensity,

    'input.stomach.ground.test': intentInPainResponse
  };

  console.log('Dialogflow action handlers', actionHandlers);

  // If undefined or unknown action use the default handler
  // if (!actionHandlers[action]) {
  //   action = 'default';
  // }

  // Run the proper handler function to handle the request from Dialogflow
  console.log('Action Handlers Intent: ' + actionHandlers[action]);
  actionHandlers[action]({request, response});
});
