import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputForm from "./InputForm";
import Result from "./Result";
import styles from "./Game.module.css";
import { questions } from "./questions";

const Game = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [
    currentQuestionCorrectAnswerCount,
    setCurrentQuestionCorrectAnswerCount,
  ] = useState(0);

  const currentQuestion = questions[questionCount];

  const navigate = useNavigate();

  const onClickNext = () => {
    const isGameEnd = questionCount === questions.length - 1;

    if (isGameEnd) {
      navigate("/thankyou");
    } else {
      setAnswers([]);
      setShowResult(false);
      setQuestionCount((prev) => prev + 1);
    }
  };

  const onSubmit = (newAnswers: string[]) => {
    setAnswers(newAnswers);
    setShowResult(true);

    let tempCurrentQuestionCorrectAnswerCount = 0;
    newAnswers.forEach((answer, index) => {
      const currentField = currentQuestion.fields[index];
      let isCorrect = false;
      if (currentField.checkAnswer) {
        isCorrect = currentField.checkAnswer(answer);
      } else {
        isCorrect = answer === currentField.solution;
      }

      if (isCorrect) {
        tempCurrentQuestionCorrectAnswerCount++;
      }
    });
    setCurrentQuestionCorrectAnswerCount(tempCurrentQuestionCorrectAnswerCount);
    setTotalPoints((prev) => prev + tempCurrentQuestionCorrectAnswerCount);
  };

  return (
    <>
      <h2>
        目前友情分數：<span>{totalPoints}</span>分
      </h2>
      <div className={styles.form}>
        <img className={styles.photo} src={currentQuestion.link} />
      </div>
      {showResult ? (
        <Result
          answers={answers}
          question={currentQuestion}
          correctAnswerCount={currentQuestionCorrectAnswerCount}
          onClickNext={onClickNext}
        />
      ) : (
        <InputForm question={currentQuestion} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default Game;
