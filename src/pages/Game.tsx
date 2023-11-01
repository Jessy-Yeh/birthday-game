import { useState } from "react";

import InputForm from "./InputForm";
import styles from "./Game.module.css";
import Result from "./Result";
import { questions } from "./questions";

const Game = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  // const calculatePoints = () => {
  //   if (ifYearCorrect && ifMonthCorrect) {
  //     setPoint((prev) => prev + 2);
  //   } else if (
  //     (ifYearCorrect && !ifMonthCorrect) ||
  //     (!ifYearCorrect && ifMonthCorrect)
  //   ) {
  //     setPoint((prev) => prev + 1);
  //   }
  // };

  return (
    <>
      <h2>
        目前友情分數：<span>{totalPoints}</span>分
      </h2>
      <div className={styles.form}>
        <img className={styles.photo} src={questions[questionCount].link} />
      </div>
      {clickSubmit ? (
        <Result
          answers={answers}
          setAnswers={setAnswers}
          setClickSubmit={setClickSubmit}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          setTotalPoints={setTotalPoints}
        />
      ) : (
        <InputForm
          questions={questions}
          questionCount={questionCount}
          answers={answers}
          setAnswers={setAnswers}
          setClickSubmit={setClickSubmit}
        />
      )}
    </>
  );
};

export default Game;
