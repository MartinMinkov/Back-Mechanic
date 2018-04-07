const INTENT_ACTIONS = {
  WELCOME_ACTION: 'input.welcome',

  QUIT_ACTION: 'input.quit',

  PAIN_INTENSITY_ACTION: 'input.ask.for.pain.intensity',

  IN_PAIN_RESPONSE_TEST_ACTION: 'input.stomach.ground.test',

  IN_PAIN_RESPONSE_TEST_TIMER: 'input.stomach.ground.test.timer',

  IN_PAIN_RESPONSE_TEST_TIMER_CHECK: 'input.stomach.ground.test.check',

  IN_PAIN_RESPONSE_TEST_TIMER_CONTINUE: 'input.stomach.ground.test.continue',

  IN_PAIN_RESPONSE_TEST_HIP_HINGE: 'input.stomach.ground.test.hiphinge',

  IN_PAIN_RESPONSE_TEST_COMPARISON: 'input.stomach.ground.test.comparison',

  IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT: 'input.lower.back.assessment',

  IN_PAIN_RESPONSE_LOWER_BACK_ASSESSMENT_CONTINUE: 'input.lower.back.assessment.continue',

  ASSESSMENT_RESULTS_SPINAL_FLEXION: 'input.assessment.spinal.flexion',

  DEFAULT_ACTION: 'default',

  UNKNOWN_ACTION: 'input.unknown'
};

module.exports = {
  INTENT_ACTIONS
};
