import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const otherPrometheusPrometheus_techniquesConfig: ThemeNote = defineNoteConfig({
  dir: 'other/prometheus/prometheus_techniques',
  link: '/other/prometheus/prometheus_techniques/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Prometheus 技术秘笈',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
