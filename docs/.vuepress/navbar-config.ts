import type { ThemeNavItem } from '../../vuepress-theme-plume/lib/node'
import { defineNavbarConfig } from '../../vuepress-theme-plume/lib/node'

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: '博客',
    link: '/blog/',
    icon: 'mdi:blog-outline',
    // 匹配博客下的所有页面，除了归档、文章归档、文章页
    activeMatch: '^/(?:blog(?!(?:\/tags\/|\/categories\/|\/archives\/))|article)\/.*',
  },
  // {
  //   text: '标签',
  //   link: '/blog/tags/',
  //   icon: 'mdi:tags',
  // },
  // {
  //   text: '分类',
  //   link: '/blog/categories/',
  //   icon: 'mdi:format-list-bulleted-type',
  // },
  // {
  //   text: '归档',
  //   link: '/blog/archives/',
  //   icon: 'mdi:archive',
  // },
  {
    text: 'Java',
    icon: 'devicon:java',
    items: [
      {
        text: '语言基础',
        icon: 'icon-park:send-to-back',
        items: [
          { text: '宋红康Java笔记', link: '/java/language/shk_java/gofne3j6/', icon: 'cib:java' },
          { text: 'Java集合框架（AI辅助整理版）', link: '/java/language/java_collection/nb9o1y1d/', icon: 'cib:java' },
        ],
      },
      {
        text: 'SSM',
        icon: 'simple-icons:springboot',
        items: [
          { text: '《JavaEE 企业级应用开发教程（Spring+Spring MVC+MyBatis）（第二版）》', link: '/java/ssm/heima_ssm_book/r3rcs5o0/', icon: 'skill-icons:spring-light' },
        ],
      },
    ],
  },
  {
    text: 'Golang',
    icon: 'skill-icons:golang',
    link: '/blog/archives/',
  },
  {
    text: 'JavaScript',
    icon: 'logos:javascript',
    link: '/blog/archives/',
  },
  {
    text: 'Rust',
    icon: 'devicon:rust',
    link: '/blog/archives/',
  },
  {
    text: '数据库',
    icon: 'streamline-plump-color:database',
    items: [
      {
        text: 'MySQL',
        icon: 'devicon:mysql',
        items: [
          { text: '宋红康MySQL教程', link: '/database/mysql/shk_mysql/q449w0j5/', icon: 'devicon-plain:mysql-wordmark' },
        ],
      },
    ],
  },
  {
    text: '其他',
    link: '/other/',
    icon: 'icon-park:other',
  },
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([

])
