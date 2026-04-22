import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javascriptBuild_and_pack_Webpack_in_actionConfig: ThemeNote = defineNoteConfig({
  dir: 'javascript/build_and_pack/webpack_in_action',
  link: '/javascript/build_and_pack/webpack_in_action/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Webpack 实战',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
