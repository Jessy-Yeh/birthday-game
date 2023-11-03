import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <h1 className={styles.title}>蓉雞得到的友情分數是</h1>
      <p className={styles.score}>{totalPoints}分</p>
    </>
  );
};

export default Thankyou;
