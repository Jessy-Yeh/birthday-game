import photo1 from "../assets/2013-01-16.jpg";
import photo2 from "../assets/2013-03-12.jpg";

export type Question = {
  link: string;
  fields: { label: string; solution: string }[];
};

export const questions: Question[] = [
  {
    link: photo1,
    fields: [
      {
        label: "what year?",
        solution: "2013",
      },
      // {
      //   label: "what month?",
      //   solution: "1",
      // },
    ],
  },
  {
    link: photo2,
    fields: [
      {
        label: "我們在幹嘛?",
        solution: "2013",
      },
      {
        label: "Where is it taken?",
        solution: "中正宿舍陽台",
      },
    ],
  },
];
