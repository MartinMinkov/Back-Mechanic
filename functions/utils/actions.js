const INTENT_ACTIONS = {
  WELCOME_ACTION: 'input.welcome',

  QUIT_ACTION: 'input.quit',

  PAIN_INTENSITY_ACTION: 'input.ask.for.pain.intensity',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_ACTION: 'input.stomach.ground.test',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_TIMER: 'input.stomach.ground.test.timer',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_TIMER_CHECK: 'input.stomach.ground.test.check',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_TIMER_CONTINUE: 'input.stomach.ground.test.continue',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_HIP_HINGE: 'input.stomach.ground.test.hiphinge',

  IN_PAIN_RESPONSE_STOMACH_GROUND_TEST_COMPARISON: 'input.stomach.ground.test.comparison',

  IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT: 'input.lower.back.assessment',

  IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT_CONTINUE: 'input.lower.back.assessment.continue',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_REQUEST: 'input.standing.extension.request',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_CONTINUE: 'input.standing.extension.test.continue',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_REPEAT: 'input.standing.extension.test.repeat',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_REQUEST: 'input.standing.extension.side.request',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_LEFT: 'input.standing.extension.side.left',

  IN_PAIN_RESPONSE_STANDING_EXTENSION_SIDE_LEFT_RESULTS: 'input.standing.extension.side.left.results',

  ASSESSMENT_RESULTS_SPINAL_FLEXION: 'input.assessment.spinal.flexion',

  ASSESSMENT_RESULTS_FACET_JOINT_INVOLVEMENT: 'input.assessment.facet.joint.involvement',

  DEFAULT_ACTION: 'default',

  UNKNOWN_ACTION: 'input.unknown'
};

module.exports = {
  INTENT_ACTIONS
};
