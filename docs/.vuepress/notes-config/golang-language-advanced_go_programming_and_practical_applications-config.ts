import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const golangLanguageAdvanced_go_programming_and_practical_applicationsConfig: ThemeNote = defineNoteConfig({
  dir: 'golang/language/advanced_go_programming_and_practical_applications',
  link: '/golang/language/advanced_go_programming_and_practical_applications/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Go语言高级开发与实战',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
