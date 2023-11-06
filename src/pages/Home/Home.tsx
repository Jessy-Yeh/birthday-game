import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles[`title-group`]}>
        <img
          className={`${styles.frog} ${styles.rotating}`}
          src="/public/frog.png"
        />
        <h1>倢蛙＆蓉雞</h1>
        <img
          className={`${styles.chick} ${styles.rotating}`}
          src="/public/chick.png"
        />
      </div>
      <p className={styles.subtitle}>友情默契大考驗</p>
      <Link to="/game">
        <button>開始</button>
      </Link>
      <img
        className={styles[`friends-image`]}
        src="../../../public/friends.jpg"
      />
    </div>
  );
};

export default Home;
