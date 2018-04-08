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

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const intentWelcomeQuit = require('./intents/welcome-quit-intents');
const intentUnknownDefault = require('./intents/default-unknown-intents');
const intentPainIntensity = require('./intents/pain-intensity-intent');
const intentGroundProneTest = require('./intents/ground-prone-test-intents');
const intentStandingExentionTest = require('./intents/standing-extention-test');
const intentPosturalAssessment = require('./intents/postural-assessment-intents');
const intentAssessmentResults = require('./intents/assessment-results-intents');

function createActionMap () {
  let actionMap = new Map();
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      actionMap.set(key, arguments[i][key]);
    }
  }
  return actionMap;
}

exports.backmechanic = functions.https.onRequest((request, response) => {
  const app = new DialogflowApp({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  const actionMap = createActionMap(
    intentWelcomeQuit,
    intentUnknownDefault,
    intentPainIntensity,
    intentGroundProneTest,
    intentStandingExentionTest,
    intentPosturalAssessment,
    intentAssessmentResults
  );

  app.handleRequest(actionMap);
});
