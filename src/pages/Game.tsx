import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
``;
import styles from "./Game.module.css";
import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "/Users/yejiejun/Documents/web-dev/birthday-game/birthday-game/src/assets/2013-03-12.jpg";

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

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const formCollections = questions.map((question, index) => {
    return (
      <div className={styles.form} key={index}>
        <img className={styles.photo} src={question.link} />
      </div>
    );
  });

  const ifYearCorrect = Number(year) === questions[questionCount].year;
  const ifMonthCorrect = Number(month) === questions[questionCount].month;

  return (
    <>
      {formCollections[questionCount]}
      {clickSubmit ? (
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
                  漂亮٩(●˙▿˙●)۶…⋆ฺ 恭喜您得到<b>2</b>友情點數 蓉雞太優秀了嗚呼～
                </p>
              ) : null}

              {(ifYearCorrect && !ifMonthCorrect) ||
              (!ifYearCorrect && ifMonthCorrect) ? (
                <p className={styles[`answer-message`]}>
                  歪腰(//●⁰౪⁰●)// 您得到<b>1</b>友情點數 蓉雞請繼續加油！
                </p>
              ) : null}

              {!ifYearCorrect && !ifMonthCorrect ? (
                <p className={styles[`answer-message`]}>
                  殘念 (ఠ్ఠ ˓̭ ఠ్ఠ) 您得到<b>0</b>友情點數
                  蓉雞倢蛙友情受到嚴酷考驗
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
      ) : (
        <form onSubmit={submitForm}>
          <TextField
            id="standard-basic"
            type="number"
            label="請輸入照片年份"
            variant="standard"
            sx={{
              margin: "2em",
              "& label.Mui-focused": {
                color: "#ffec51",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ffec51",
              },
            }}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <TextField
            id="standard-basic"
            type="number"
            label="請輸入照片月份"
            variant="standard"
            sx={{
              margin: "2em",
              "& label.Mui-focused": {
                color: "#ffec51",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ffec51",
              },
            }}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />

          <button
            type="submit"
            onClick={() => {
              setClickSubmit(!clickSubmit);
            }}
          >
            送出友情考卷
          </button>
        </form>
      )}
    </>
  );
};

export default Game;
