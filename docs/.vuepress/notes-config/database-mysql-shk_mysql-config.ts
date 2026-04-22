import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const databaseMysqlShk_mysqlConfig: ThemeNote = defineNoteConfig({
  dir: 'database/mysql/shk_mysql',
  link: '/database/mysql/shk_mysql/',
  sidebar: [
    {
      // 侧边栏title
      text: '宋红康MySQL教程',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
