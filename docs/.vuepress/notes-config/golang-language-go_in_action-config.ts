import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const golangLanguageGo_in_actionConfig: ThemeNote = defineNoteConfig({
  dir: 'golang/language/go_in_action',
  link: '/golang/language/go_in_action/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Go语言实战',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
