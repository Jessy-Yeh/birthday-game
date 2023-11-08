import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  MouseEventHandler,
} from "react";
import Marquee from "react-fast-marquee";
import Confetti from "react-confetti";
// import Fade from "@mui/material/Fade";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  const { width, height } = useWindowSize();
  // const [showConfetti, setShowConfetti] = useState(true);
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
          {/* {showConfetti && <Confetti width={width} height={height}></Confetti>} */}
          <Confetti width={width} height={height}></Confetti>
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
        <h2>倢蛙給蓉雞の話</h2>
        {/* <textarea
          rows={25}
          cols={35}
          id="aboutDescription"
          className={styles[`text-message`]}
        > */}
        sit amet metus. Proin nec condimentum risus, vel sollicitudin nisi.
        Pellentesque dapibus magna id lobortis vestibulum. Duis porta eleifend
        justo ut ultricies. Suspendisse potenti. Curabitur sapien velit,
        tincidunt non tempus nec, molestie nec ligula. Morbi aliquet odio non
        consequat malesuada. Phasellus in neque ut nisl rutrum hendrerit
        consequat id lorem. In hac habitasse platea dictumst. Nunc sit amet
        magna pellentesque, cursus elit non, pulvinar nisl. Sed in iaculis eros,
        eget laoreet lorem. Mauris vestibulum elit ac mauris bibendum, eu
        dapibus neque pulvinar. Fusce ultricies aliquet accumsan. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Quisque vitae arcu ut
        mi fermentum vulputate vel gravida nisl. Nunc in commodo sem.
        Suspendisse potenti. Nam aliquet dignissim felis in cursus. Donec in
        nunc efficitur, sodales nunc non, blandit mi. Proin porta metus felis,
        eget aliquam ante semper in. Quisque lacinia mauris vel porta varius.
        Phasellus at lorem feugiat, fermentum ex sed, iaculis neque. Cras
        dignissim convallis felis sit amet gravida. Integer sit amet nisl
        auctor, gravida dolor eget, suscipit magna. Donec porttitor erat et
        venenatis ultrices. Maecenas tempus ultricies condimentum. Maecenas
        pellentesque pharetra dui. Vivamus velit ante, finibus et augue vitae,
        suscipit dictum erat. Mauris convallis accumsan sem, dapibus rutrum nisi
        tincidunt sit amet. Integer sodales ligula quis varius rhoncus.
        Suspendisse ut venenatis lectus. Mauris scelerisque dapibus convallis.
        In in lacus quis lorem vestibulum ultricies eu in nisi. Aliquam erat
        volutpat. Ma eget aliquam ante semper in. Quisque lacinia mauris vel
        porta varius. Phasellus at lorem feugiat, fermentum ex sed, iaculis
        neque. Cras dignissim convallis felis sit amet gravida. Integer sit amet
        nisl auctor, gravida dolor eget, suscipit magna. Donec porttitor erat et
        venenatis ultrices. Maecenas tempus ultricies condimentum. Maecenas
        pellentesque pharetra dui. Vivamus velit ante, finibus et augue vitae,
        suscipit dictum erat. Mauris convallis accumsan sem, dapibus rutrum nisi
        tincidunt sit amet. Integer sodales ligula quis varius rhoncus.
        Suspendisse ut venenatis lectus. Mauris scelerisque dapibus convallis.
        In in lacus quis lorem vestibulum ultricies eu in nisi. Aliquam erat
        volutpat. Ma
        {/* </textarea> */}
        <Marquee>生日快樂 生日快樂 生日快樂 生日快樂 生日快樂</Marquee>
      </div>
    </div>
  );
};
export default Thankyou;
