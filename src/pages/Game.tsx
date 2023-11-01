import { useState } from "react";

import InputForm from "./InputForm";
import styles from "./Game.module.css";
import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "/Users/yejiejun/Documents/web-dev/birthday-game/birthday-game/src/assets/2013-03-12.jpg";
import Result from "./Result";

const questions = [
  {
    link: photo1,
    year: 2013,
    month: 1,
  },
  {
    link: photo2,
    year: 2013,
    month: 3,
  },
];

const Game = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);
  const [point, setPoint] = useState(0);

  const formCollections = questions.map((question, index) => {
    return (
      <div className={styles.form} key={index}>
        <img className={styles.photo} src={question.link} />
      </div>
    );
  });

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
        目前友情分數：<span>{point}</span>分
      </h2>
      {formCollections[questionCount]}
      {clickSubmit ? (
        <Result
          year={year}
          month={month}
          clickSubmit={clickSubmit}
          setClickSubmit={setClickSubmit}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
        />
      ) : (
        <InputForm
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          clickSubmit={clickSubmit}
          setClickSubmit={setClickSubmit}
        />
      )}
    </>
  );
};

export default Game;
