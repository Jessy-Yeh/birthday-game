import styles from "./getMessage.module.css";

const getMessage = (correctAnswerCount: number, answers: string[]) => {
  const resultMessages = [
    <div className={styles[`message-group`]}>
      <p>
        殘念 (ఠ్ఠ ˓̭ ఠ్ఠ) 您得到<b>0</b>分
      </p>{" "}
      <p>蓉雞倢蛙友情受到嚴酷考驗</p>
    </div>,
    <div className={styles[`message-group`]}>
      <p>
        歪腰(//●⁰౪⁰●)// 您得到<b>{correctAnswerCount}</b>分
      </p>{" "}
      蓉雞請繼續加油！
    </div>,
    <div className={styles[`message-group`]}>
      <p>
        漂亮٩(●˙▿˙●)۶…⋆ฺ恭喜您得到<b>{correctAnswerCount}</b>分
      </p>
      蓉雞太優秀了嗚呼～
    </div>,
  ];
  if (correctAnswerCount === answers.length) {
    return resultMessages[2];
  } else if (correctAnswerCount === 0) {
    return resultMessages[0];
  } else {
    return resultMessages[1];
  }
};

export default getMessage;
