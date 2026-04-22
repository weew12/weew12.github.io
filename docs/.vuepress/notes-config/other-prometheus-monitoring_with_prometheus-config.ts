import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

export const otherPrometheusMonitoring_with_prometheusConfig: ThemeNote = defineNoteConfig({
  dir: 'other/prometheus/monitoring_with_prometheus',
  link: '/other/prometheus/monitoring_with_prometheus/',
  sidebar: [
    {
      // 侧边栏title
      text: 'Prometheus监控实战',
      // 折叠侧边栏
      collapsed: false,
      items: 'auto',
    },
  ],
})
