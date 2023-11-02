// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
}

export default App;
