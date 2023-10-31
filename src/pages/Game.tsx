import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
``;
import styles from "./Game.module.css";
import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "/Users/yejiejun/Documents/web-dev/birthday-game/birthday-game/src/assets/2013-03-12.jpg";

const questions = [
  {
    link: photo1,
    year: "2013",
    month: "01",
  },
  {
    link: photo2,
    year: "2013",
    month: "03",
  },
];

const Game = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const formCollections = questions.map((question, index) => {
    return (
      <div className={styles.form} key={index}>
        <img className={styles.photo} src={question.link} />
        <form onSubmit={submitForm}>
          {/* <input
              type="number"
              placeholder="Year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            ></input>
            <label htmlFor="year">請輸入照片年份</label> */}
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

          {/* <p>請輸入照片月份</p> */}
          {/* <input
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          ></input> */}
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
            onClick={() => setQuestionCount((prev) => prev + 1)}
          >
            送出友情考卷
          </button>
        </form>
      </div>
    );
  });

  return <>{formCollections[questionCount]}</>;
};

export default Game;
