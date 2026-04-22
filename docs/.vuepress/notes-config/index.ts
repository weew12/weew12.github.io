import type { ThemeNoteListOptions } from '../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../vuepress-theme-plume/lib/node'

import {
  javaLanguageShkConfig,
  javaLanguageJavaCollectionConfig,
  javaSsmHeimaConfig,
} from './java-config'

import {
  databaseMysqlShkConfig
} from './database-config'

import {
  otherPrometheusPrometheusTechniquesConfig,
  otherPrometheusPrometheusMonitoringPracticeConfig,
  otherPrometheusMonitoringWithPrometheusConfig,
} from './other-config'

import {
  golangCloudNativeHelmGuideConfig,
  golangLanguageGoInActionConfig,
  golangLanguageAdvancedGoConfig,
  golangLanguageGoCookBookConfig,
  golangLanguageLearningGoV2Config
} from './golang-config'

import {
  javascriptLanguageLxfTutorialConfig,
  javascriptLanguageModernJavascriptConfig,
  javascriptBuildPackWebpackInActionConfig,
  javascriptBuildPackWebpackInDepthConfig,
} from './javascript-config'

import {
  rustLanguage14dayRustConfig
} from './rust-config'

export const zhNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    // Java
    javaLanguageShkConfig,
    javaLanguageJavaCollectionConfig,
    javaSsmHeimaConfig,

    // Golang
    golangCloudNativeHelmGuideConfig,
    golangLanguageGoInActionConfig,
    golangLanguageAdvancedGoConfig,
    golangLanguageGoCookBookConfig,
    golangLanguageLearningGoV2Config,

    // JavaScript
    javascriptLanguageLxfTutorialConfig,
    javascriptLanguageModernJavascriptConfig,
    javascriptBuildPackWebpackInActionConfig,
    javascriptBuildPackWebpackInDepthConfig,

    // Rust
    rustLanguage14dayRustConfig,

    // 数据库
    databaseMysqlShkConfig,

    // 其他
    otherPrometheusPrometheusTechniquesConfig,
    otherPrometheusPrometheusMonitoringPracticeConfig,
    otherPrometheusMonitoringWithPrometheusConfig,
  ],

})
