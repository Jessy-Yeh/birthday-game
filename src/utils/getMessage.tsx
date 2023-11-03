const getMessage = (correctAnswerCount: number, answers: string[]) => {
  const resultMessages = [
    <>
      殘念 (ఠ్ఠ ˓̭ ఠ్ఠ) 您得到<b>0</b>友情分數 蓉雞倢蛙友情受到嚴酷考驗
    </>,
    <>
      歪腰(//●⁰౪⁰●)// 您得到<b>{correctAnswerCount}</b>友情分數 蓉雞請繼續加油！
    </>,
    <>
      漂亮٩(●˙▿˙●)۶…⋆ฺ 恭喜您得到<b>{correctAnswerCount}</b>友情分數
      蓉雞太優秀了嗚呼～
    </>,
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
