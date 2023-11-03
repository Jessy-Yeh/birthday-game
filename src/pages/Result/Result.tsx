import getMessage from "../../utils/getMessage";
import styles from "../Game/Game.module.css";
import { Question, questions } from "../questions";

interface Props {
  answers: string[];
  question: Question;
  correctAnswerCount: number;
  onClickNext: () => void;
  questionCount: number;
}

const Result = ({
  answers,
  question,
  correctAnswerCount,
  onClickNext,
  questionCount,
}: Props) => {
  const message = getMessage(correctAnswerCount, answers);

  const areAnswersCorrect = answers.map((answer, index) => {
    const currentField = question.fields[index];
    if (currentField.checkAnswer) {
      return currentField.checkAnswer(answer);
    } else {
      return answer === currentField.solution;
    }
  });

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
                    areAnswersCorrect[index] ? "" : styles[`wrong-answer`]
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
        {questionCount === questions.length - 1 ? <>公開成果</> : <>下一回合</>}
      </button>
    </>
  );
};

export default Result;
