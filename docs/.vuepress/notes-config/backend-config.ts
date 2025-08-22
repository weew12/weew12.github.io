import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const backendConfig: ThemeNote = defineNoteConfig({
  dir: 'backend',
  link: '/backend/',
  sidebar: [
    {
      // 侧边栏title
      text: '后端',
      // 折叠侧边栏
      collapsed: false,
      // 补充路径
      // prefix: 'configs',
      items: [],
    },
  ],
})
