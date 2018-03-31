const general = {
  GREETING: 'Welcome to Back Mechanic, the step by step McGill Method to fix back pain.  This app is intended ' +
    'for informational and educational purposes only. Are you currently experiencing back pain?',

  PAIN_REQUEST: 'To begin let’s assess your current level of pain. On a scale of 1 to 10, with 10 being high levels of ' +
    'pain, what would you rate it currently?',

  PAIN_DECREASE_REQUEST: 'Have you noticed your pain levels decrease?',

  QUIT: 'Thank you for using Back Mechanic. See you next time and pain free!'
};

const InPainResponse = {
  STOMACH_GROUND_TEST_REQUEST: 'we will reassess that number after this test. Our starting position will be laying ' +
    'on the ground on our stomach as displayed in picture 1. This may be uncomfortable at first but allow yourself 30 ' +
    'seconds to ease into it. Say continue once you’re laying down.',

  STOMACH_GROUND_TEST_REQUEST_TIMER_REQUEST: 'Focus on your breath and allow your back to relax into the floor. ' +
    'A 30 second timer has begun.',

  STOMACH_CHIN_GROUND_TEST_REQUEST: 'Continue to lay in this position. You may prop your chin up on your fist as ' +
    'shown in picture 2. If this position is more comfortable, maintain it. Otherwise return to the original position. ' +
    'A time for 2 minutes and 30 seconds has begun. ',

  STOMACH_GROUND_TEST_TRANSITION_HIP_HINGE: '3 minutes has elapsed. You may now carefully stand up by pushing ' +
    'yourself up on to your hands and knees and then lunge up, hinging through the hips, without flexing the spine. ' +
    'How would you rate your pain level now?',

  LOWER_BACK_ASSESSMENT_REQUEST: 'Next you will be guided through an assessment to decrease the stress on the muscles ' +
    'of your lower back. Are you ready?'
};

module.exports = {
  general,
  InPainResponse
};
