const GENERAL_ACTIONS = {

  WELCOME: 'input.welcome',

  QUIT: 'input.quit',

  DEFAULT: 'default',

  UNKNOWN: 'input.unknown'
};

const IN_PAIN_RESPONSE_ACTIONS = {

  PAIN_INTENSITY_ACTION: 'input.ask.for.pain.intensity',

  STOMACH_GROUND_TEST_ACTION: 'input.stomach.ground.test',

  STOMACH_GROUND_TEST_TIMER: 'input.stomach.ground.test.timer',

  STOMACH_GROUND_TEST_TIMER_CHECK: 'input.stomach.ground.test.check',

  STOMACH_GROUND_TEST_TIMER_CONTINUE: 'input.stomach.ground.test.continue',

  STOMACH_GROUND_TEST_HIP_HINGE: 'input.stomach.ground.test.hiphinge',

  STOMACH_GROUND_TEST_COMPARISON: 'input.stomach.ground.test.comparison',

  LOWER_BACK_ASSESSMENT: 'input.lower.back.assessment',

  LOWER_BACK_ASSESSMENT_CONTINUE: 'input.lower.back.assessment.continue',

  STANDING_EXTENSION_REQUEST: 'input.standing.extension.request',

  STANDING_EXTENSION_CONTINUE: 'input.standing.extension.test.continue',

  STANDING_EXTENSION_REPEAT: 'input.standing.extension.test.repeat',

  STANDING_EXTENSION_SIDE_REQUEST: 'input.standing.extension.side.request',

  STANDING_EXTENSION_SIDE_LEFT: 'input.standing.extension.side.left',

  STANDING_EXTENSION_SIDE_LEFT_RESULTS: 'input.standing.extension.side.left.results'

};

const NOT_IN_PAIN_RESPONSE_ACTIONS = {

  SEATED_COMPRESSION_TEST_REQUEST: 'input.seated.compression.test.request',

  SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE: 'input.seated.compression.test.chair.available',

  SEATED_COMPRESSION_TEST_NEUTRAL_SPINE_REQUEST: 'input.seated.compression.test.neutral.spine.request',

  SEATED_COMPRESSION_TEST_FLEXION_SPINE_REQUEST: 'input.seated.compression.test.flexion.spine.request',

  SEATED_COMPRESSION_TEST_FLEXION_SPINE_FLEXION_CHIN_REQUEST: 'input.seated.compression.test.flexion.spine.flexion.chin',

  SEATED_COMPRESSION_TEST_FLEXION_SPINE_EXTENSION_CHIN_REQUEST: 'input.seated.compression.test.flexion.spine.extension.chin',

  SEATED_COMPRESSION_TEST_NEXT_TEST_REQUEST: 'input.seated.compression.test.next.test.request',

  HEEL_DROP_TEST_REQUEST: 'input.heel.drop.test.request',

  HEEL_DROP_TEST_NECK_FLEXION: 'input.heel.drop.test.neck.flexion',

  WALL_PLANK_TEST_ABDOMINAL_BRACING_REQUEST: 'input.wall.plank.abdominal.bracing.request',

  WALL_PLANK_TEST_ABDOMINAL_BRACING_CONTINUED_REQUEST: 'input.wall.plank.abdominal.bracing.continued.request'

};

const ASSESSMENT_RESULTS_ACTIONS = {

  SPINAL_FLEXION: 'input.assessment.spinal.flexion',

  FACET_JOINT_INVOLVEMENT: 'input.assessment.facet.joint.involvement',

  NECK_FLEXION: 'input.assessment.neck.flexion'
};

module.exports = {
  GENERAL_ACTIONS,
  IN_PAIN_RESPONSE_ACTIONS,
  NOT_IN_PAIN_RESPONSE_ACTIONS,
  ASSESSMENT_RESULTS_ACTIONS
};
