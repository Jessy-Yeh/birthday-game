import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      {showConfetti && <Confetti width={width} height={height} />}
      <h1 className={styles.title}>蓉雞得到的友情分數是</h1>
      <p className={styles.score}>{totalPoints}分</p>
    </div>
  );
};

export default Thankyou;
