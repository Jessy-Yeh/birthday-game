import TextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

interface Props {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const AnswerField = ({ label, value, onChange }: Props) => {
  return (
    <TextField
      type="text"
      variant="standard"
      sx={{
        "& label": {
          color: "#FE9FB8 ",
        },
        margin: "2em",
        "& label.Mui-focused": {
          color: "#33498F",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#33498F",
        },
      }}
      label={label}
      value={value}
      onChange={onChange}
      required={true}
    />
  );
};

export default AnswerField;
