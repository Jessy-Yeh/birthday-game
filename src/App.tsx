// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";

const router = createBrowserRouter([
  {
    path: "/game",
    element: <Game />,
  },
]);

function App() {
  return (
    <>
      <h1>🐸倢蛙＆蓉雞🐥</h1>
      <p className="subtitle">友情大考驗</p>
      <button>開始</button>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
