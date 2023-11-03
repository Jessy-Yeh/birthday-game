// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Thankyou from "./pages/Thankyou/Thankyou";
import { useState } from "react";

function App() {
  const [totalPoints, setTotalPoints] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/game"
        element={
          <Game totalPoints={totalPoints} setTotalPoints={setTotalPoints} />
        }
      />
      <Route
        path="/thankyou"
        element={<Thankyou totalPoints={totalPoints} />}
      />
    </Routes>
  );
}

export default App;
