import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "../assets/2013-03-12.jpg";
// import photo3 from "../assets/2013-03-22.jpg";
// import photo4 from "../assets/2013-05-09.jpg";
// import photo5 from "../assets/2013-05-28.jpg";
// import photo6 from "../assets/2013-06-21 22.56.40.jpg";
// import photo7 from "../assets/2013-10-19.jpg";
// import photo8 from "../assets/2014-02-05.jpg";
// import photo9 from "../assets/2014-11-11.jpg";
// import photo10 from "../assets/2015-11-14.jpg";
// import photo11 from "../assets/2016-10-30.1.jpg";
// import photo12 from "../assets/2018-10-10.jpg";
// import photo13 from "../assets/2019-10-05.jpg";
// import photo14 from "../assets/2019-11-30.jpg";
// import photo15 from "../assets/2022-09-15.jpg";
// import photo16 from "../assets/2013-08-04 09.50.57.jpg";

export type Question = {
  link: string;
  fields: {
    label: string;
    solution: string;
    checkAnswer?: (answer: string) => boolean;
  }[];
};

export const questions: Question[] = [
  {
    link: photo1,
    fields: [
      {
        label: "拍攝年份是?",
        solution: "2013",
      },
      {
        label: "我們宿舍房號?",
        solution: "3613",
      },
    ],
  },
  {
    link: photo2,
    fields: [
      {
        label: "我們在幹嘛?",
        solution: "演戲",
        checkAnswer: (answer) => {
          if (answer.includes("演戲") || answer.includes("拍戲")) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        label: "這個地點是?",
        solution: "中正宿舍陽台",
        checkAnswer: (answer) => {
          if (answer.includes("陽台") || answer.includes("宿舍")) {
            return true;
          } else {
            return false;
          }
        },
      },
    ],
  },
  // {
  //   link: photo3,
  //   fields: [{ label: "這個地點是?", solution: "早餐店" }],
  // },
  // {
  //   link: photo4,
  //   fields: [
  //     {
  //       label: "我們在哪唱歌?",
  //       solution: "納米",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("納米")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo5,
  //   fields: [{ label: "我們前方有什麼動物?", solution: "天鵝" }],
  // },
  // {
  //   link: photo6,
  //   fields: [
  //     {
  //       label: "這個地點是?",
  //       solution: "宿舍交誼廳",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("交誼廳")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //     {
  //       label: "我們在幹嘛?",
  //       solution: "耍白痴？",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("白痴") || answer.includes("笨")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo7,
  //   fields: [{ label: "我們正在前往的地點是?", solution: "旺萊山" }],
  // },
  // {
  //   link: photo8,
  //   fields: [
  //     { label: "拍攝年份是?", solution: "2014" },
  //     {
  //       label: "我們在幹嘛?",
  //       solution: "幫陳慕恩慶生？",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("慶生")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo9,
  //   fields: [
  //     {
  //       label: "誰比較白痴?",
  //       solution: "蓉雞",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("蓉") || answer.includes("我")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo10,
  //   fields: [
  //     { label: "拍攝地點是?", solution: "草悟道" },
  //     { label: "晚餐吃了什麼?", solution: "滷味" },
  //   ],
  // },
  // {
  //   link: photo11,
  //   fields: [
  //     {
  //       label: "當天吃早餐遇到哪位蓉雞朋友?",
  //       solution: "韓籍",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("韓")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo16,
  //   fields: [
  //     { label: "倢蛙的身高多少?", solution: "164" },
  //     {
  //       label: "那天在幹嘛?",
  //       solution: "迎新？",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("迎新") || answer.includes("新生")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo12,
  //   fields: [
  //     {
  //       label: "我們做了什麼活動?",
  //       solution: "射飛鏢",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("飛鏢")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo13,
  //   fields: [
  //     { label: "當天活動名稱?", solution: "白晝之夜" },
  //     {
  //       label: "當天韓籍朋友叫什麼名字?",
  //       solution: "我忘了",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("忘")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
  // {
  //   link: photo14,
  //   fields: [
  //     {
  //       label: "這個地點是?",
  //       solution: "板橋耶誕城",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("耶誕")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //     { label: "來這裡的交通工具?", solution: "捷運" },
  //   ],
  // },
  // {
  //   link: photo15,
  //   fields: [
  //     { label: "這座橋叫什麼?", solution: "數學橋" },
  //     {
  //       label: "我們之中誰撐篙比較成功?",
  //       solution: "蓉雞",
  //       checkAnswer: (answer) => {
  //         if (answer.includes("蓉")) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       },
  //     },
  //   ],
  // },
];
