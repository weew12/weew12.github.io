import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const golangLanguageLearninggov2cnConfig: ThemeNote = defineNoteConfig({
  dir: 'golang/language/learninggov2cn',
  link: '/golang/language/learninggov2cn/',
  sidebar: [
    {
      // 侧边栏title
      text: '学习 Go 语言（第2版）',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
