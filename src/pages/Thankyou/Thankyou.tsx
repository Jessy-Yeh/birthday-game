import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Fade from "@mui/material/Fade";
interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const testMessages = [
    <p>123</p>,
    <p>hello mao</p>,
    <p>this is Monday</p>,
    <p>so</p>,
    <p>all the best</p>,
  ];

  useEffect(() => {
    const displayNextMessage = () => {
      if (currentMessageIndex < testMessages.length - 1) {
        setTimeout(() => {
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        }, 3000);
      }
    };

    displayNextMessage();
  }, [currentMessageIndex]);

  return (
    <div className={styles.page}>
      {showConfetti && <Confetti width={width} height={height} />}
      <h1 className={styles.title}>蓉雞得到的友情分數是</h1>
      <p className={styles.score}>{totalPoints}分</p>
      {testMessages[currentMessageIndex]}
    </div>
  );
};

export default Thankyou;
