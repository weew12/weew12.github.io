import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javaLanguageJava_collectionConfig: ThemeNote = defineNoteConfig({
  dir: 'java/language/java_collection',
  link: '/java/language/java_collection/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Java集合框架（AI辅助整理版）',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
