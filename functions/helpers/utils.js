function sendResponse (responseToUser, response) {
  // if the response is a string send it as a response to the user
  if (typeof responseToUser === 'string') {
    let responseJson = {fulfillmentText: responseToUser}; // displayed response
    response.json(responseJson); // Send response to Dialogflow
  } else {
    // If the response to the user includes rich responses or contexts send them to Dialogflow
    let responseJson = {};

    // Define the text response
    responseJson.fulfillmentText = responseToUser.fulfillmentText;
    // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
    if (responseToUser.fulfillmentMessages) {
      responseJson.fulfillmentMessages = responseToUser.fulfillmentMessages;
    }
    // Optional: add contexts (https://dialogflow.com/docs/contexts)
    if (responseToUser.outputContexts) {
      responseJson.outputContexts = responseToUser.outputContexts;
    }

    // Send the response to Dialogflow
    console.log('Response to Dialogflow: ' + JSON.stringify(responseJson));
    response.json(responseJson);
  }
}

module.exports = {
  sendResponse
};
