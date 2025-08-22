import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const themeConfig: ThemeNote = defineNoteConfig({
  dir: 'config',
  link: '/config/',
  sidebar: [
    {
      // 侧边栏title
      text: '配置1',
      // 折叠侧边栏
      collapsed: false,
      // 补充路径
      // prefix: 'configs',
      items: [
        'intro',
        'theme',
      ],
    },
  ],
})
