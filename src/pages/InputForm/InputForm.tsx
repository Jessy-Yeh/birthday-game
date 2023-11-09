import { useState } from "react";
import { Question } from "../questions";
import AnswerField from "../AnswerField/AnswerField";

interface Props {
  question: Question;
  onSubmit: (newAnswers: string[]) => void;
}

const InputForm = ({ question, onSubmit }: Props) => {
  const [isNotFilled, setIsNotFilled] = useState(false);
  const [localAnswers, setLocalAnswers] = useState<string[]>(() => {
    const lengthOfQuestions = question.fields.length;
    const answersArray = [];
    for (let i = 0; i < lengthOfQuestions; i++) {
      answersArray.push("");
    }
    return answersArray;
  });

  function onAnswerChange(index: number, newValue: string) {
    const newAnswers = [...localAnswers];
    newAnswers[index] = newValue;
    setLocalAnswers(newAnswers);
  }

  function handleSubmit() {
    if (!localAnswers.every((a) => a)) {
      setIsNotFilled(true);
    } else {
      onSubmit(localAnswers);
    }
  }

  return (
    <form>
      {question.fields.map((field, index) => {
        return (
          <AnswerField
            key={index}
            label={field.label}
            value={localAnswers[index]}
            onChange={(e) => onAnswerChange(index, e.target.value)}
          />
        );
      })}

      <button type="submit" onClick={handleSubmit}>
        公布答案
      </button>
      {isNotFilled ? <p>請輸入全部問題</p> : <></>}
    </form>
  );
};

export default InputForm;
