const GENERAL = {
  GREETING: 'Welcome to Back Mechanic, the step by step McGill Method to fix back pain.  This app is intended ' +
    'for informational and educational purposes only. Are you currently experiencing back pain?',

  PAIN_REQUEST: 'To begin let’s assess your current level of pain. On a scale of 1 to 10, with 10 being high levels of ' +
    'pain, what would you rate it currently?',

  PAIN_DECREASE_REQUEST: 'Have you noticed your pain levels decrease?',

  QUIT: 'Thank you for using Back Mechanic. See you next time and pain free!',

  DEFAULT: 'This message is from the default response handler',

  UNKNOWN: 'I\'m having trouble, can you try that again?'
};

const IN_PAIN_RESPONSE = {
  STOMACH_GROUND_TEST_REQUEST: 'we will reassess that number after this test. Our starting position will be laying ' +
    'on the ground on our stomach as displayed in picture 1. This may be uncomfortable at first but allow yourself 30 ' +
    'seconds to ease into it. Say continue once you’re laying down.',

  STOMACH_GROUND_TEST_REQUEST_TIMER: 'Focus on your breath and allow your back to relax into the floor. ' +
    'Press the play button to start a 30 second timer.',

  STOMACH_GROUND_TEST_REQUEST_CHECK: 'Have you noticed your pain levels decrease?',

  STOMACH_GROUND_TEST_CONTINUE: 'Continue to lay in this position. You may prop your chin up on your fist as ' +
    'shown in picture 2. If this position is more comfortable, maintain it. Otherwise return to the original position. ' +
    'A time for 2 minutes and 30 seconds has begun. ',

  STOMACH_GROUND_TEST_TRANSITION_HIP_HINGE: '3 minutes has elapsed. You may now carefully stand up by pushing ' +
    'yourself up on to your hands and knees and then lunge up, hinging through the hips, without flexing the spine. ' +
    'How would you rate your pain level now?',

  LOWER_BACK_ASSESSMENT_REQUEST: 'Next you will be guided through an assessment to decrease the stress on the muscles ' +
    'of your lower back. Are you ready?',

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

const ASSESSMENT_RESULTS = {
  SPINAL_FLEXION: 'It seems you have pain with spinal flexion. This pain will be worsened with slouching, sitting, ' +
  'bending and activities such as gardening or tying your shoes. The most likely cause is a disc bulge. Laying on your ' +
  'stomach will provide pain relief and practicing the “shortstop squat” and the spinal hygiene principles will be ' +
  'important. Would you like to hear more about ways to avoid your pain triggers?'
};

module.exports = {
  GENERAL,
  IN_PAIN_RESPONSE,
  ASSESSMENT_RESULTS
};
