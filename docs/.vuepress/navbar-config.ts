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
  // {
  //   text: '配置',
  //   icon: 'material-symbols:edit-note-outline-sharp',
  //   link: '/notes/config/intro.md',
  //   activeMatch: '^/config/',
  // },
  {
    text: '笔记',
    icon: 'mdi:notes-outline',
    badge: '新',
    items: [
      {
        text: '后端',
        icon: 'icon-park:send-to-back',
        items: [
          { text: '语言基础', link: '/language/java/' },
        ],
      },
    ],
  }
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([

])
