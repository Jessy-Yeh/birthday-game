import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  MouseEventHandler,
} from "react";
import Confetti from "react-confetti";
// import Fade from "@mui/material/Fade";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [clickNext, setClickNext] = useState(false);

  const messageRef = useRef(null);
  console.log(messageRef);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowConfetti(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // const testMessages = [
  //   <p>123</p>,
  //   <p>hello mao</p>,
  //   <p>this is Monday</p>,
  //   <p>so</p>,
  //   <p>all the best</p>,
  // ];

  // useEffect(() => {
  //   const displayNextMessage = () => {
  //     if (currentMessageIndex < testMessages.length - 1) {
  //       setTimeout(() => {
  //         setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  //       }, 3000);
  //     }
  //   };

  //   displayNextMessage();
  // }, [currentMessageIndex, testMessages.length]);

  // function getMessage() {
  //   setClickNext((prev) => !prev);

  //   if (messageRef.current) {
  //     messageRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  return (
    <div className={styles.page}>
      <div className={styles[`first-section`]}>
        <div></div>
        <div>
          {showConfetti && <Confetti width={width} height={height}></Confetti>}
          <h1 className={styles.title}>蓉雞得到的默契分數是</h1>
          <p className={styles.score}>{totalPoints * 4}分</p>
        </div>

        <div
          role="button"
          onClick={() => scrollToSection(messageRef)}
          className={styles[`show-message`]}
        >
          <p>倢蛙給蓉雞的話</p>
          <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
        </div>
      </div>

      {/* <button onClick={getMessage}>See Msg</button> */}

      {/* {clickNext && testMessages[currentMessageIndex]} */}

      {/* <div ref={messageRef}>
          {clickNext && testMessages[currentMessageIndex]}
        </div> */}

      <div ref={messageRef} className={styles[`second-section`]}>
        <h2>this is the second section wooo</h2>
      </div>
    </div>
  );
};
export default Thankyou;
