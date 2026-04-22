import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const golangCloudnativeHelm_study_guideConfig: ThemeNote = defineNoteConfig({
  dir: 'golang/cloudnative/helm_study_guide',
  link: '/golang/cloudnative/helm_study_guide/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Helm 学习指南',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
