import styles from "./Game.module.css";
import { Question } from "./questions";

interface Props {
  answers: string[];
  question: Question;
  correctAnswerCount: number;
  onClickNext: () => void;
}

const Result = ({
  answers,
  question,
  correctAnswerCount,
  onClickNext,
}: Props) => {
  const resultMessages = [
    <>
      殘念 (ఠ్ఠ ˓̭ ఠ్ఠ) 您得到<b>0</b>友情分數 蓉雞倢蛙友情受到嚴酷考驗
    </>,
    <>
      歪腰(//●⁰౪⁰●)// 您得到<b>{correctAnswerCount}</b>友情分數 蓉雞請繼續加油！
    </>,
    <>
      漂亮٩(●˙▿˙●)۶…⋆ฺ 恭喜您得到<b>{correctAnswerCount}</b>友情分數
      蓉雞太優秀了嗚呼～
    </>,
  ];
  let message: JSX.Element = <></>;

  if (correctAnswerCount === answers.length) {
    message = resultMessages[2];
  } else if (correctAnswerCount === 0) {
    message = resultMessages[0];
  } else {
    message = resultMessages[1];
  }

  // const message = getMessage(countCorrectAnswers);

  return (
    <>
      <div className={styles[`answer-display`]}>
        <div className={styles[`answer-section`]}>
          <div>
            <h2 className={styles[`answer-title`]}>蓉雞答案</h2>

            {answers.map((answer, index) => {
              return (
                <p
                  key={index}
                  className={
                    answer === question.fields[index].solution
                      ? ""
                      : styles[`wrong-answer`]
                  }
                >
                  {answer}
                </p>
              );
            })}
          </div>
          <div>
            <h2 className={styles[`answer-title`]}>正解</h2>
            {question.fields.map((field, index) => (
              <p key={index}>{field.solution}</p>
            ))}
          </div>
        </div>

        <div>
          <p className={styles[`answer-message`]}>{message}</p>
        </div>
      </div>

      <button type="submit" onClick={onClickNext}>
        下一回合
      </button>
    </>
  );
};

export default Result;
