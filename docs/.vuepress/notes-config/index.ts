import type { ThemeNoteListOptions } from '../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../vuepress-theme-plume/lib/node'

import {
  javaLanguageShk_javaConfig,
  javaLanguageJava_collectionConfig,
  javaSsmHeima_ssm_bookConfig,
} from './java-config'

import {
  databaseMysqlShk_mysqlConfig
} from './database-config'

import {
  otherPrometheusPrometheus_techniquesConfig,
  otherPrometheusPrometheus_monitoring_technology_and_practiceConfig,
  otherPrometheusMonitoring_with_prometheusConfig,
} from './other-config'

import {
  golangCloudnativeHelm_study_guideConfig,
  golangLanguageGo_in_actionConfig,
  golangLanguageAdvanced_go_programming_and_practical_applicationsConfig,
  golangLanguageGocookbookConfig,
  golangLanguageLearninggov2cnConfig
} from './golang-config'

import {
  javascriptLanguageLxf_fullstack_javascript_tutorialConfig,
  javascriptLanguageThe_modern_javascript_tutorialConfig,
  javascriptBuild_and_pack_Webpack_in_actionConfig,
  javascriptBuild_and_pack_Webpack_in_depthConfig,
} from './javascript-config'

import {
  rustLanguage14dayrustConfig
} from './rust-config'

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
    javascriptLanguageLxf_fullstack_javascript_tutorialConfig,
    javascriptLanguageThe_modern_javascript_tutorialConfig,
    javascriptBuild_and_pack_Webpack_in_actionConfig,
    javascriptBuild_and_pack_Webpack_in_depthConfig,

    // Rust
    rustLanguage14dayrustConfig,

    // 数据库
    databaseMysqlShk_mysqlConfig,

    // 其他
    otherPrometheusPrometheus_techniquesConfig,
    otherPrometheusPrometheus_monitoring_technology_and_practiceConfig,
    otherPrometheusMonitoring_with_prometheusConfig,
  ],

})
