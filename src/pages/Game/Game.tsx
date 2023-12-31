import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputForm from "../InputForm/InputForm";
import Result from "../Result/Result";
import styles from "./Game.module.css";
import { questions } from "../questions";
import { countCorrectAnswers } from "../../utils/countCorrectAnswers";

interface Props {
  totalPoints: number;
  setTotalPoints: Dispatch<SetStateAction<number>>;
}

const Game = ({ totalPoints, setTotalPoints }: Props) => {
  const [questionCount, setQuestionCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

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

    const tempCurrentQuestionCorrectAnswerCount = countCorrectAnswers(
      newAnswers,
      currentQuestion
    );
    setCurrentQuestionCorrectAnswerCount(tempCurrentQuestionCorrectAnswerCount);
    setTotalPoints((prev) => prev + tempCurrentQuestionCorrectAnswerCount);
  };

  return (
    <div className={styles.background}>
      <h2 className={styles.title}>
        目前默契分數：<span>{totalPoints}</span>分
      </h2>
      <div className={styles.image}>
        <img className={styles.photo} src={currentQuestion.link} />
      </div>
      {showResult ? (
        <Result
          answers={answers}
          question={currentQuestion}
          correctAnswerCount={currentQuestionCorrectAnswerCount}
          onClickNext={onClickNext}
          questionCount={questionCount}
        />
      ) : (
        <InputForm question={currentQuestion} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default Game;
