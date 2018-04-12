const GENERAL = {
  GREETING: 'Welcome to Back Mechanic, the step by step McGill Method to fix back pain.  This app is intended ' +
    'for informational and educational purposes only. Are you currently experiencing back pain?',

  PAIN_REQUEST: 'To begin, how would you rate your pain on a scale from 1 to 10?',

  PAIN_DECREASE_REQUEST: 'Have you noticed your pain levels decrease?',

  QUIT: 'Thank you for using Back Mechanic. See you next time and pain free!',

  DEFAULT: 'This message is from the default response handler',

  UNKNOWN: 'I\'m having trouble, can you try that again?'
};

const IN_PAIN_RESPONSE = {
  STOMACH_GROUND_TEST_REQUEST: 'The first test will begin with laying down on your stomach as displayed in picture #1 ' +
  'below. This may be uncomfortable at first but allow yourself 30 seconds to ease into it. Are you ready to begin?',

  STOMACH_GROUND_TEST_REQUEST_TIMER: 'Lay down, then tap the timer to begin the 30 seconds.',

  STOMACH_GROUND_TEST_REQUEST_CHECK: 'Would you say your pain levels have increased or decreased?',

  STOMACH_GROUND_TEST_CONTINUE: 'Continue to lay in this position for 2 minutes and 30 seconds. You may prop your chin ' +
  'up on your fist as shown in picture 2. If this position is more comfortable, maintain it. Otherwise return to the original position.',

  STOMACH_GROUND_TEST_TRANSITION_HIP_HINGE: '3 minutes has elapsed. You may now carefully stand up, doing your best not ' +
  'to aggravate your back. Once upright, let me know your pain level again from 1 to 10',

  LOWER_BACK_ASSESSMENT_REQUEST: 'Next we will aim to decrease the stress of the lower back muscles. Shall we continue?',

  STANDING_EXTENSION_TEST_REQUEST: 'You may now carefully stand up by pushing yourself up on to your hands and knees ' +
  'and then lunge up, hinging through the hips, without flexing the spine.\n We will proceed with a test to see if ' +
  'your pelvic instability is contributing to your pain. Say continue when you are ready.\n',

  STANDING_EXTENSION_TEST_CONTINUE: 'In a standing position arch your back through the lower back. Does this aggravate ' +
  'your pain?',

  STANDING_EXTENSION_TEST_REPEAT: 'Repeat this motion but with twisting to the right and then left side. ' +
  'Does one side cause more pain than the other?',

  STANDING_EXTENSION_TEST_SIDE_REQUEST: 'Is the right side or left side worse?',

  STANDING_EXTENSION_TEST_SIDE_LEFT: 'Stand on your left leg as if you were beginning to march and then arch your back ' +
  'again. Is the pain less?',

  STANDING_EXTENSION_TEST_SIDE_LEFT_RESULTS: 'We have found that stiffening the pelvis and spine will make your more ' +
  'resilient to extension postures. For you a “feel-good” positions is where the spine is neither flexed nor extended ' +
  'but in a neutral position. Say show me my results to get more information.',

  LOWER_BACK_ASSESSMENT: 'We are going to find a standing posture that relaxes the lower back muscles. Begin by ' +
  'standing in your normal posture and place your hand on the muscles of your lower back, right next to the spine ' +
  '(insert picture). If you poke your chin out or look towards the ground you will notice the muscles tighten up. ' +
  'This is also the same for rounding your shoulders. Once you’ve been able to feel the difference in the muscles ' +
  'with the movement say continue.',

  LOWER_BACK_ASSESSMENT_CONTINUE: 'Now that you’re able to distinguish the differences in the muscle, adjust your ' +
  'posture by changing your head and shoulder position until the lower back muscles are the most soft. The idea is to ' +
  'stand in a way that reduces the activities of the lower back muscles and stop muscle cramps. Once you’ve achieved ' +
  'this say show me my results.'
};

const NOT_IN_PAIN_RESPONSE = {
  SEATED_COMPRESSION_TEST_REQUEST: 'I am going to guide you through various tests in order to discover your pain ' +
  'triggers. They are meant to be provocative so that we can find the specific causes of your pain. Do not push ' +
  'yourself into any uncomfortable pain levels. The first test requires a chair, do you have access to one?',

  SEATED_COMPRESSION_TEST_CHAIR_AVAILABLE: 'Observe the displayed picture. The person on the left is sitting with a ' +
  '“neutral spine”, the middle is with an “extended spine” and the right is with a “flexed spine” take note of each ' +
  'position as they will be referred to in the following steps. Say I’m ready to continue.',

  SEATED_COMPRESSION_TEST_CHAIR_NEUTRAL_SPINE_REQUEST: 'Sit with a neutral spine (left), grab the bottom of the chair ' +
  'and pull yourself down into the chair while maintaining that posture. Does this increase your pain?',

  SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_REQUEST: 'Now slouch like the person on the right and pull down again. ' +
  'Does this increase your pain?',

  SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_FLEXION_CHIN_REQUEST: 'In the position that caused you pain, flex your neck by' +
  ' bringing your chin down to your chest and repeat the pulling motion. Does this further increase the pain?',

  SEATED_COMPRESSION_TEST_CHAIR_FLEXION_SPINE_EXTENSION_CHIN_REQUEST: 'Now extend your neck as if to look up at the ' +
  'ceiling and perform the same movement. Does this decrease the pain',

  SEATED_COMPRESSION_TEST_AVOID_PAIN_POSITIONS: 'With this in mind you should avoid any seated positions like the ones that caused you ' +
  'pain. Do not add any additional load while in this postures and practice hip-hinging. We will now move on to the next ' +
  'test. To continue, stand up and say I’m ready.',

  HEEL_DROP_TEST_REQUEST: 'While standing, rise up on to your toes and drop down on your heels - gently at first. ' +
  'Is any pain or discomfort triggered?',

  HEEL_DROP_TEST_NECK_FLEXION: 'Repeat the same movement but with your neck flexed, tucking your chin to your chest. ' +
  'Does this further increase the pain?'
};

const ASSESSMENT_RESULTS = {
  SPINAL_FLEXION: 'It seems you have pain with spinal flexion. This pain will be worsened with slouching, sitting, ' +
  'bending and activities such as gardening or tying your shoes. The most likely cause is a disc bulge. Laying on your ' +
  'stomach will provide pain relief and practicing the “shortstop squat” and the spinal hygiene principles will be ' +
  'important. Would you like to hear more about ways to avoid your pain triggers?',

  FACET_JOINT_INVOLVEMENT: 'You have pain when bending backwards or when twisting linked with instability, ' +
  'This is typically a combination of disc pathology with facet joint involvement. You need to avoid spine extension ' +
  'and twisting. Learning to move with the hips is a crucial skill to learn. Avoid pain producing postures and replace ' +
  'them with “feel-good” ones.',

  NECK_FLEXION: 'Based on today’s findings it seems that you have pain with neck flexion. The nerve roots leaving the ' +
  'spinal cord have increased their sensitivity from mechanical irritation. You should find an appropriate neck posture ' +
  'and begin with tummy lying. Then consider nerve flossing after the corrective exercises and spinal hygiene techniques.'
};

module.exports = {
  GENERAL,
  IN_PAIN_RESPONSE,
  NOT_IN_PAIN_RESPONSE,
  ASSESSMENT_RESULTS
};
