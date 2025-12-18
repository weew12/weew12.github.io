import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const backendFrameworkConfig: ThemeNote = defineNoteConfig({
  dir: 'backend/framework',
  link: '/framework/',
  sidebar: [
    {
      // 侧边栏title
      text: '《JavaEE 企业级应用开发教程（Spring+Spring MVC+MyBatis）（第二版）》 黑马程序员',
      // 折叠侧边栏
      collapsed: true,
      prefix: 'heima_ssm_book',
      items: 'auto',
    },
    // {
    //   text: 'Java集合专栏',
    //   collapsed: true,
    //   prefix: 'java_collection',
    //   items: 'auto',
    // }
  ],
})
