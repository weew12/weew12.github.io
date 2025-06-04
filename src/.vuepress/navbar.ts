import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "语言基础",
    prefix: "/语言基础",
    icon: "/assets/icon/java.svg",
    children: [
      {
        text: "宋红康java基础",
        icon: "",
        prefix: "宋红康java基础/",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          "1.Java语言基础",
        ]
      },
      {
        text: "其他",
        icon: "",
        prefix: "其他/",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          "其他1",
          "其他2",
        ]
      }
    ]
  },
  {
    text: "ssm学习",
    link: "/ssm学习/1.md",
  },
  {
    text: "其他",
    link: "/其他/",
  }
]);
