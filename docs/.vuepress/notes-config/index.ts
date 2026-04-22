import type { ThemeNoteListOptions } from '../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../vuepress-theme-plume/lib/node'
import { javaLanguageShk_javaConfig } from './java-language-shk_java-config'
import { javaLanguageJava_collectionConfig } from './java-language-java_collection-config'
import { javaSsmHeima_ssm_bookConfig } from './java-ssm-heima_ssm_book-config'
import { databaseMysqlShk_mysqlConfig } from './database-mysql-shk_mysql-config'
import { otherPrometheusPrometheus_techniquesConfig } from './other-prometheus-prometheus_techniques-config'
import { otherPrometheusPrometheus_monitoring_technology_and_practiceConfig } from './other-prometheus-prometheus_monitoring_technology_and_practice-config'

export const zhNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    // Java
    javaLanguageShk_javaConfig,
    javaLanguageJava_collectionConfig,
    javaSsmHeima_ssm_bookConfig,
    // Golang

    // JavaScript

    // Rust

    // 数据库
    databaseMysqlShk_mysqlConfig,

    // 其他
    otherPrometheusPrometheus_techniquesConfig,
    otherPrometheusPrometheus_monitoring_technology_and_practiceConfig,
  ],

})
