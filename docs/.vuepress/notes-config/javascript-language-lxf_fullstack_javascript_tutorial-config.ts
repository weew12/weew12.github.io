import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javascriptLanguageLxf_fullstack_javascript_tutorialConfig: ThemeNote = defineNoteConfig({
  dir: 'javascript/language/lxf_fullstack_javascript_tutorial',
  link: '/javascript/language/lxf_fullstack_javascript_tutorial/',
  sidebar: [
    {
      // 侧边栏title
      text: '廖雪峰 JavaScript 全栈教程',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
