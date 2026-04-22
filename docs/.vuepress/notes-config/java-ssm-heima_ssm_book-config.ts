import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javaSsmHeima_ssm_bookConfig: ThemeNote = defineNoteConfig({
  dir: 'java/ssm/heima_ssm_book',
  link: '/java/ssm/heima_ssm_book/',
  sidebar: [
    {
      // 侧边栏title
      text: '《JavaEE 企业级应用开发教程（Spring+Spring MVC+MyBatis）（第二版）》',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
