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

const { intentWelcome, intentQuit } = require('./intents/welcome-quit-intent');
const { intentDefault, intentUnknown } = require('./intents/default-unknown-intent');
const { intentPainIntensity } = require('./intents/pain-intensity-intent');
const { intentInPainResponse } = require('./intents/in-pain-response-intent');

const { INTENT_ACTIONS } = require('./utils/actions');

exports.backmechanic = functions.https.onRequest((request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  console.log('Dialogflow response:' + response);

  let action = (request.body.queryResult.action) ? request.body.queryResult.action : 'default';
  console.log('Dialogflow action: ' + action);

  const actionHandlers = {
    [INTENT_ACTIONS.WELCOME_ACTION]: intentWelcome,

    [INTENT_ACTIONS.QUIT_ACTION]: intentQuit,

    [INTENT_ACTIONS.PAIN_INTENSITY_ACTION]: intentPainIntensity,

    [INTENT_ACTIONS.IN_PAIN_RESPONSE_TEST_ACTION]: intentInPainResponse,

    [INTENT_ACTIONS.DEFAULT_ACTION]: intentDefault,

    [INTENT_ACTIONS.UNKNOWN_ACTION]: intentUnknown
  };

  console.log('Dialogflow action handlers', actionHandlers);
  console.log('Action Handlers Intent: ' + actionHandlers[action]);

  // Run the proper handler function to handle the request from Dialogflow
  actionHandlers[action]({request, response});
});
