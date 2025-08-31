import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const databaseMysqlConfig: ThemeNote = defineNoteConfig({
  dir: 'database/mysql',
  link: '/mysql/',
  sidebar: [
    {
      // 侧边栏title
      text: 'MYSQL',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
