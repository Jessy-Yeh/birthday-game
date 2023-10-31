import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
``;
import styles from "./Game.module.css";
import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "/Users/yejiejun/Documents/web-dev/birthday-game/birthday-game/src/assets/2013-03-12.jpg";

const questions = [
  {
    link: photo1,
    year: "2013",
    month: "01",
  },
  {
    link: photo2,
    year: "2013",
    month: "03",
  },
];
const Game = () => {
  return <>Game starts!</>;
};

export default Game;
