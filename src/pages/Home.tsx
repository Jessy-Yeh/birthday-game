import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>🐸倢蛙＆蓉雞🐥</h1>
      <p className="subtitle">友情默契大考驗</p>
      <Link to="/game">
        <button>開始</button>
      </Link>
    </>
  );
};

export default Home;
