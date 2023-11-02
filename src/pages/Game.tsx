import { useState } from "react";

import InputForm from "./InputForm";
import styles from "./Game.module.css";
import Result from "./Result";
import { questions } from "./questions";

const Game = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const currentQuestion = questions[questionCount];

  let currentQuestionCorrectAnswerCount = 0;

  answers.forEach((answer, index) => {
    if (answer === currentQuestion.fields[index].solution) {
      currentQuestionCorrectAnswerCount++;
    }
  });

  const onClickNext = () => {
    setAnswers([]);
    setShowResult(false);
    setQuestionCount((prev) => prev + 1);
  };

  const onSubmit = (newAnswers: string[]) => {
    setAnswers(newAnswers);
    setShowResult(true);
    // setTotalPoints
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
