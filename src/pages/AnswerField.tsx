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
      type="number"
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
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default AnswerField;
