import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const javascriptBuild_and_pack_Webpack_in_depthConfig: ThemeNote = defineNoteConfig({
  dir: 'javascript/build_and_pack/webpack_in_depth',
  link: '/javascript/build_and_pack/webpack_in_depth/',
  sidebar: [
    {
      // 侧边栏title
      text: '深入浅出Webpack',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
