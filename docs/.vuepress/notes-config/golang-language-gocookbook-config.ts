import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const golangLanguageGocookbookConfig: ThemeNote = defineNoteConfig({
  dir: 'golang/language/gocookbook',
  link: '/golang/language/gocookbook/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Go Cookbook 中文版',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
