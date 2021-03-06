/**
 * Phishing (proceed) survey.
 */

/**
 * Adds the questions for the example survey.
 * @param {object} parentNode The DOM node to attach the surveys to.
 */
function addQuestions(parentNode) {
  addQuestion(parentNode, commonQuestions.createWhatWebsiteQuestion());
  addQuestion(parentNode, commonQuestions.createChoiceQuestion(
      'visit this unsafe site', 'Back to safety'));
  addQuestion(parentNode, commonQuestions.createPageMeaningQuestion());
  addQuestion(parentNode, commonQuestions.createPageSourceQuestion());
  addQuestion(parentNode, commonQuestions.createHistoryQuestions());
  addQuestion(parentNode, commonQuestions.createReferrerQuestion());
  addQuestion(parentNode, commonQuestions.createAccountQuestion());
  addQuestion(parentNode, commonQuestions.createVisitQuestion());
  addQuestion(parentNode, commonQuestions.createTrustQuestion());
  addQuestion(parentNode, commonQuestions.createAttributesQuestion());
  addQuestion(parentNode, commonQuestions.createRecordUrlQuestion());
  addQuestion(parentNode, commonQuestions.createClarificationQuestion());
}

/**
 * Adds the screenshot for the survey.
 */
function setScreenshot() {
  $('example-img').src = 'screenshots/phishing-proceed.png';
}
