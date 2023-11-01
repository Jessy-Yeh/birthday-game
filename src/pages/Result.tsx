import styles from "./Game.module.css";
import { Dispatch, SetStateAction } from "react";

import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "/Users/yejiejun/Documents/web-dev/birthday-game/birthday-game/src/assets/2013-03-12.jpg";

interface Props {
  year: string;
  month: string;
  clickSubmit: boolean;
  setClickSubmit: Dispatch<SetStateAction<boolean>>;
  questionCount: number;
  setQuestionCount: Dispatch<SetStateAction<number>>;
}

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

const Result = ({
  year,
  month,
  clickSubmit,
  setClickSubmit,
  questionCount,
  setQuestionCount,
}: Props) => {
  const ifYearCorrect = Number(year) === questions[questionCount].year;
  const ifMonthCorrect = Number(month) === questions[questionCount].month;

  return (
    <>
      <div className={styles[`answer-display`]}>
        <div className={styles[`answer-section`]}>
          <div>
            <h2 className={styles[`answer-title`]}>蓉雞答案</h2>
            <p className={ifYearCorrect ? "" : styles[`wrong-answer`]}>
              {year}年
            </p>
            <p className={ifMonthCorrect ? "" : styles[`wrong-answer`]}>
              {month}月
            </p>
          </div>

          <div>
            <h2 className={styles[`answer-title`]}>正解</h2>
            <p>{questions[questionCount].year}年</p>
            <p>{questions[questionCount].month}月</p>
          </div>
        </div>

        <div>
          {ifYearCorrect && ifMonthCorrect ? (
            <p className={styles[`answer-message`]}>
              漂亮٩(●˙▿˙●)۶…⋆ฺ 恭喜您得到<b>2</b>友情分數 蓉雞太優秀了嗚呼～
            </p>
          ) : null}

          {(ifYearCorrect && !ifMonthCorrect) ||
          (!ifYearCorrect && ifMonthCorrect) ? (
            <p className={styles[`answer-message`]}>
              歪腰(//●⁰౪⁰●)// 您得到<b>1</b>友情分數 蓉雞請繼續加油！
            </p>
          ) : null}

          {!ifYearCorrect && !ifMonthCorrect ? (
            <p className={styles[`answer-message`]}>
              殘念 (ఠ్ఠ ˓̭ ఠ్ఠ) 您得到<b>0</b>友情分數 蓉雞倢蛙友情受到嚴酷考驗
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        onClick={() => {
          setClickSubmit(!clickSubmit);
          setQuestionCount((prev) => prev + 1);
        }}
      >
        下一回合
      </button>
    </>
  );
};

export default Result;
