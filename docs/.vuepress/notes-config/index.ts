import type { ThemeNoteListOptions } from '../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../vuepress-theme-plume/lib/node'
import { javaLanguageShk_javaConfig } from './java-language-shk_java-config'
import { javaLanguageJava_collectionConfig } from './java-language-java_collection-config'
import { javaSsmHeima_ssm_bookConfig } from './java-ssm-heima_ssm_book-config'
import { databaseMysqlShk_mysqlConfig } from './database-mysql-shk_mysql-config'
import { otherPrometheusPrometheus_techniquesConfig } from './other-prometheus-prometheus_techniques-config'
import { otherPrometheusPrometheus_monitoring_technology_and_practiceConfig } from './other-prometheus-prometheus_monitoring_technology_and_practice-config'
import { otherPrometheusMonitoring_with_prometheusConfig } from './other-prometheus-monitoring_with_prometheus-config'
import { golangCloudnativeHelm_study_guideConfig } from './golang-cloudnative-helm_study_guide-config'
import { golangLanguageGo_in_actionConfig } from './golang-language-go_in_action-config'
import { golangLanguageAdvanced_go_programming_and_practical_applicationsConfig } from './golang-language-advanced_go_programming_and_practical_applications-config'
import { golangLanguageGocookbookConfig } from './golang-language-gocookbook-config'
import { golangLanguageLearninggov2cnConfig } from './golang-language-learninggov2cn-config'

export const zhNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    // Java
    javaLanguageShk_javaConfig,
    javaLanguageJava_collectionConfig,
    javaSsmHeima_ssm_bookConfig,
    // Golang
    golangCloudnativeHelm_study_guideConfig,
    golangLanguageGo_in_actionConfig,
    golangLanguageAdvanced_go_programming_and_practical_applicationsConfig,
    golangLanguageGocookbookConfig,
    golangLanguageLearninggov2cnConfig,
    // JavaScript

    // Rust

    // 数据库
    databaseMysqlShk_mysqlConfig,

    // 其他
    otherPrometheusPrometheus_techniquesConfig,
    otherPrometheusPrometheus_monitoring_technology_and_practiceConfig,
    otherPrometheusMonitoring_with_prometheusConfig,
  ],

})
