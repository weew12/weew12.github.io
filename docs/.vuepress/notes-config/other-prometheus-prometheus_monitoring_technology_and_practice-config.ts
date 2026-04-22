import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const otherPrometheusPrometheus_monitoring_technology_and_practiceConfig: ThemeNote = defineNoteConfig({
  dir: 'other/prometheus/prometheus_monitoring_technology_and_practice',
  link: '/other/prometheus/prometheus_monitoring_technology_and_practice/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Prometheus监控技术与实践',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
