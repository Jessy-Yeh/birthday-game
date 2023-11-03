import { Question } from "../pages/questions";

export function countCorrectAnswers(
  newAnswers: string[],
  currentQuestion: Question
) {
  let tempCurrentQuestionCorrectAnswerCount = 0;
  let isCorrect = false;

  newAnswers.forEach((answer, index) => {
    const currentField = currentQuestion.fields[index];
    if (currentField.checkAnswer) {
      isCorrect = currentField.checkAnswer(answer);
    } else {
      isCorrect = answer === currentField.solution;
    }

    if (isCorrect) {
      tempCurrentQuestionCorrectAnswerCount++;
    }
  });

  return tempCurrentQuestionCorrectAnswerCount;
}
