import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javaLanguageShk_javaConfig: ThemeNote = defineNoteConfig({
  dir: 'java/language/shk_java',
  link: '/java/language/shk_java/',
  sidebar: [
    {
      // 侧边栏title
      text: '宋红康Java2023版',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
