/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "simple-icons:homepage" },
  { text: "博客", link: "/blog/", icon: "fa6-solid:blog" },
  {
    text: "分类",
    link: "/blog/archives/",
    icon: "material-symbols:category",
  },
  {
    text: "标签",
    link: "/blog/tags/",
    icon: "mdi:tags",
  },
  {
    text: "笔记",
    icon: "garden:notes-fill-12",
    items: [
      {
        text: "后端",
        icon: "ri:send-to-back",
        items: [
          {
            text: "java语言基础",
            link: "/后端/java语言基础/",
            icon: "logos:java",
          },
          // {
          //   text: "",
          //   link: "",
          //   icon: "mdi:paper-airplane",
          //   badge: "徽章",
          // },
        ],
      },
      // {
      //   text: "前端",
      //   icon: "icon-park-solid:theme",
      //   items: [
      //     {
      //       text: "",
      //       link: "",
      //       icon: "mdi:paper-airplane",
      //       badge: "徽章",
      //     },
      //   ],
      // },
      // {
      //   text: "AI",
      //   icon: "icon-park-solid:theme",
      //   items: [
      //     {
      //       text: "",
      //       link: "",
      //       icon: "mdi:paper-airplane",
      //       badge: "徽章",
      //     },
      //   ],
      // },
    ],
  },
]);
