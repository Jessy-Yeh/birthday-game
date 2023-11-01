import TextField from "@mui/material/TextField";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface Props {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
  clickSubmit: boolean;
  setClickSubmit: Dispatch<SetStateAction<boolean>>;
}

function submitForm(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

const InputForm = ({
  year,
  setYear,
  month,
  setMonth,
  clickSubmit,
  setClickSubmit,
}: Props) => {
  return (
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
  );
};

export default InputForm;
