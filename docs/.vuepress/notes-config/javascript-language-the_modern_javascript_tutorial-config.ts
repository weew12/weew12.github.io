import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javascriptLanguageThe_modern_javascript_tutorialConfig: ThemeNote = defineNoteConfig({
  dir: 'javascript/language/the_modern_javascript_tutorial',
  link: '/javascript/language/the_modern_javascript_tutorial/',
  sidebar: [
    {
      // 侧边栏title
      text: '现代 JavaScript 教程',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
