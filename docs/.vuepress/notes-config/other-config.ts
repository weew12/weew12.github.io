import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

// =================== prometheus ===================
const otherPrometheusMonitoringWithPrometheusConfig: ThemeNote = defineNoteConfig({
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

const otherPrometheusPrometheusMonitoringPracticeConfig: ThemeNote = defineNoteConfig({
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

const otherPrometheusPrometheusTechniquesConfig: ThemeNote = defineNoteConfig({
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

export {
    otherPrometheusMonitoringWithPrometheusConfig,
    otherPrometheusPrometheusMonitoringPracticeConfig,
    otherPrometheusPrometheusTechniquesConfig,
}
