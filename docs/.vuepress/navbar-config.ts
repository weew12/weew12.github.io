import type { ThemeNavItem } from '../../vuepress-theme-plume/lib/node'
import { defineNavbarConfig } from '../../vuepress-theme-plume/lib/node'

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: '博客',
    link: '/blog/',
    icon: 'mdi:blog-outline',
    activeMatch: '^/(?:blog(?!(?:\/tags\/|\/categories\/|\/archives\/))|article)\/.*',
  },
  {
    text: '标签',
    link: '/blog/tags/',
    icon: 'mdi:tags',
  },
  {
    text: '分类',
    link: '/blog/categories/',
    icon: 'mdi:format-list-bulleted-type',
  },
  {
    text: '归档',
    link: '/blog/archives/',
    icon: 'mdi:archive',
  },
  {
    text: '笔记',
    icon: 'mdi:notes-outline',
    items: [
      {
        text: '后端',
        icon: 'icon-park:send-to-back',
        items: [
          { text: '语言基础', link: '/language/java/1pj4wq5u/', icon: 'streamline-freehand:programming-language-script-lock'},
          { text: '框架相关', link: '/framework/heima_ssm_book/r3rcs5o0/', icon: 'simple-icons:framework', badge: 'new'},
        ],
      },
      {
        text: '数据库',
        icon: 'streamline-plump-color:database',
        items: [
          { text: 'MYSQL', link: '/mysql/q449w0j5/', icon: 'logos:mysql'},
        ],
      },
    ],
  }
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([

])
