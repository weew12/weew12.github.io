import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const rustLanguage14dayrustConfig: ThemeNote = defineNoteConfig({
  dir: 'rust/language/14dayrust',
  link: '/rust/language/14dayrust/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Rust 14 天特种兵训练',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
