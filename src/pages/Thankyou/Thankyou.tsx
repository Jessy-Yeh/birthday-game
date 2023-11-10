import styles from "./Thankyou.module.css";
import { useWindowSize } from "react-use";
import { useRef, RefObject } from "react";
// import { useScroll, motion } from "framer-motion";
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

  const secondSectionRef = useRef<HTMLDivElement>(null);
  const progressWheelRef = useRef(null);
  const backToTopRef = useRef(null);

  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // const { scrollYProgress } = useScroll({
  //   container: progressWheelRef,
  // });

  // scroll((progress) => {
  //   progressWheelRef?.current.style.strokeDasharray = `${progress}, 1`;
  // });

  // useEffect(() => {
  //   const handleScroll = (progress) => {
  //     progressWheelRef.current.style.strokeDasharray = `${progress}, 1`;
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowConfetti(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className={styles.page}>
      <div ref={backToTopRef} className={styles[`first-section`]}>
        <div></div>
        <div>
          {/* {showConfetti && <Confetti width={width} height={height}></Confetti>} */}
          <Confetti width={width} height={height}></Confetti>
          <h1 className={styles.title}>蓉雞得到的默契分數是</h1>
          <p className={styles.score}>{totalPoints}分</p>
        </div>

        <div
          role="button"
          onClick={() => scrollToSection(secondSectionRef)}
          className={styles[`show-message`]}
        >
          <p>點我點我</p>
          <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
        </div>
      </div>

      <div className={styles[`second-section`]}></div>

      <div ref={secondSectionRef} className={styles[`second-section`]}>
        <div className={styles[`title-section`]}>
          <img
            className={`${styles.frog} ${styles.rotating}`}
            src="/frog.png"
          />
          <h2>倢蛙給蓉雞の話</h2>
          <img
            className={`${styles.chick} ${styles.rotating}`}
            src="/chick.png"
          />
        </div>

        <div className={styles[`text-message`]}>
          <div>
            {/* <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              className={styles[`progress-wheel`]}
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.bg}
              />

              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.indicator}
                style={{ pathLength: scrollYProgress }}
              />
            </svg> */}
          </div>
          <div className={styles.test} ref={progressWheelRef}>
            <p>嘿，蓉雞！ 恭喜妳得到{totalPoints}默契分</p>
            <p>其實不管有沒有滿分</p>
            <p>我們的友誼早已超越所有分數！</p>
            <p>希望妳有享受作答每一題哈哈</p>
            <p>雖然想跟你說的部分的話</p>
            <p>已經在上次我生日的時候說了</p>
            <p>但是我還是想再次告訴妳</p>
            <p>認識妳是我人生最幸運的事之一 </p>
            <p>為了做這個小遊戲</p>
            <p>我回頭翻了所有的老照片</p>
            <p>每次看到都忍不住大笑</p>
            <p>到底為什麼我們的怪表情這麼多 </p>
            ...
            <p>和妳認識已經11年</p>
            <p>即便畢業後我們見面的次數也隨之減少</p>
            <p>我們依然還是連繫著</p>
            ...
            <p>謝謝你沒有在我當時</p>
            <p>一頭栽進愛情的時候離開我</p>
            <p>總是聽我訴說各種喜怒哀樂 </p>
            ...
            <p>謝謝你去年跑來倫敦找我玩 </p>
            <p>雖然妳剛好得Covid</p>
            <p>但還是很堅強的走完全部行程 </p>
            <p>我們又好似回到在中正住宿的那一年</p>
            <p>這趟旅程</p>
            <p>彷彿是我們遲來的畢業旅行</p>
            <p>卻沒有因為遲來而減少半分喜悅</p>
            <p>當時的我們</p>
            <p>一定沒想到我們現在會在海外生活</p>
            <p>謝謝我們一直為了自己的目標努力</p>
            <p>就如同當初我們一個轉學一個轉系</p>
            <p>即時如此</p>
            <p>在我們嘗試找尋自己的道路上</p>
            <p>我們之間的橋樑還是連接著</p>
            ...
            <p>我本來有點懼怕30歲的到來</p>
            <p>後來我發現</p>
            <p>這是一個很棒的年紀</p>
            <p>是一個可以回頭檢閱自己</p>
            <p>人生一路走來的時刻</p>
            ...
            <p>謝謝蓉雞的不離不棄</p>
            <p>我們一起繼續在人生的道路上努力</p>
            <p>蓉雞</p>
            <p>生日快樂!!!!</p>
          </div>
        </div>
        <Marquee className={styles.marquee}>
          🎂Happy Birthday 🎂Happy Birthday 🎂Happy Birthday 🎂Happy Birthday{" "}
        </Marquee>
        <button
          className={styles[`back-to-top-button`]}
          onClick={() => scrollToSection(backToTopRef)}
        >
          回顧分數
        </button>
      </div>
    </div>
  );
};
export default Thankyou;
