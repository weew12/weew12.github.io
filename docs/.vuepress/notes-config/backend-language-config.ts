import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const backendLanguageConfig: ThemeNote = defineNoteConfig({
  dir: 'backend/language',
  link: '/language/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Java语言基础',
      // 折叠侧边栏
      collapsed: false,
      prefix: 'java',
      items: 'auto',
    },
  ],
})
