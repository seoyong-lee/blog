import { Post } from "~/types/scheme";

export const archiveMockData: { [year: string]: { [month: string]: Post[] } } =
  {
    2022: {
      1: [
        {
          id: "1",
          title: "Adversarial Attacks on LLMs",
          desc: "desc",
          createdAt: 1,
          imgUrl: "",
          text: "",
          author: {
            name: "Drew Lee",
          },
          deleted: false,
        },
        {
          id: "2",
          title: "LLM Powered Autonomous Agents",
          desc: "desc",
          createdAt: 2,
          imgUrl: "",
          text: "",
          author: {
            name: "Drew Lee",
          },
          deleted: false,
        },
      ],
      11: [
        {
          id: "3",
          title: "Prompt Engineering",
          desc: "desc",
          createdAt: 3,
          imgUrl: "",
          text: "",
          author: {
            name: "Drew Lee",
          },
          deleted: false,
        },
      ],
      12: [
        {
          id: "4",
          title: "Some Math behind Neural Tangent Kernel",
          desc: "desc",
          createdAt: 4,
          imgUrl: "",
          text: "",
          author: {
            name: "Drew Lee",
          },
          deleted: false,
        },
      ],
    },
    2023: {
      3: [
        {
          id: "5",
          title: "Generalized Visual Language Models",
          desc: "desc",
          createdAt: 5,
          imgUrl: "",
          text: "",
          author: {
            name: "Drew Lee",
          },
          deleted: false,
        },
      ],
    },
  };
