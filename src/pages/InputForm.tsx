import TextField from "@mui/material/TextField";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Question } from "./questions";

interface Props {
  questions: Question[];
  answers: string[];
  questionCount: number;
  setAnswers: Dispatch<SetStateAction<string[]>>;
  setClickSubmit: Dispatch<SetStateAction<boolean>>;
}

function submitForm(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

const InputForm = ({
  questions,
  answers,
  questionCount,
  setAnswers,
  setClickSubmit,
}: Props) => {
  return (
    <form onSubmit={submitForm}>
      {questions[questionCount].fields.map((field, index) => {
        return (
          <TextField
            key={index}
            type="number"
            label={field.label}
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
            value={answers.pop()}
            onChange={(e) => setAnswers((prev) => [...prev, e.target.value])}
          />
        );
      })}

      <button
        type="submit"
        onClick={() => {
          setClickSubmit(true);
        }}
      >
        送出友情考卷
      </button>
    </form>
  );
};

export default InputForm;
