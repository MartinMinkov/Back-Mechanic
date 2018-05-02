// Copyright 2018, Google, Inc.
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

'use strict';

const intentWelcomeQuit = require('./intents/welcome-quit-intents');
const intentUnknownDefault = require('./intents/default-unknown-intents');
const intentPainIntensity = require('./intents/pain-intensity-intent');
const intentStomachGroundTest = require('./intents/stomach-ground-test-intents');
const intentStandingExtensionTest = require('./intents/standing-extension-test-intents');
const intentPosturalAssessment = require('./intents/postural-assessment-intents');
// const intentSeatedCompressionTest = require('./intents/seated-compression-test-intents');
// const intentHeelDropTest = require('./intents/heel-drop-test-intents');
// const intentWallPlankTest = require('./intents/wall-plank-test-intents');
const intentAssessmentResults = require('./intents/assessment-results-intents');

const app = require('actions-on-google').dialogflow();

/** Adds Intent-name & callback key value pairs to app */
function addIntents (...args) {
  for (let i = 0; i < args.length; i++) {
    for (const key in args[i]) {
      if (args[i].hasOwnProperty(key)) app.intent(key, args[i][key]);
    }
  }
}

addIntents(
  intentWelcomeQuit,
  intentUnknownDefault,
  intentPainIntensity,
  intentStomachGroundTest,
  intentStandingExtensionTest,
  intentPosturalAssessment,
  intentAssessmentResults

);

module.exports = app;
