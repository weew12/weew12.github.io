import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

// ================== language ==================
const golangLanguageAdvanced_go_programming_and_practical_applicationsConfig: ThemeNote = defineNoteConfig({
    dir: 'golang/language/advanced_go_programming_and_practical_applications',
    link: '/golang/language/advanced_go_programming_and_practical_applications/',
    sidebar: [
        {
            // 侧边栏title
            text: 'Go语言高级开发与实战',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const golangLanguageGo_in_actionConfig: ThemeNote = defineNoteConfig({
    dir: 'golang/language/go_in_action',
    link: '/golang/language/go_in_action/',
    sidebar: [
        {
            // 侧边栏title
            text: 'Go语言实战',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const golangLanguageGocookbookConfig: ThemeNote = defineNoteConfig({
    dir: 'golang/language/gocookbook',
    link: '/golang/language/gocookbook/',
    sidebar: [
        {
            // 侧边栏title
            text: 'Go Cookbook 中文版',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const golangLanguageLearninggov2cnConfig: ThemeNote = defineNoteConfig({
    dir: 'golang/language/learninggov2cn',
    link: '/golang/language/learninggov2cn/',
    sidebar: [
        {
            // 侧边栏title
            text: '学习 Go 语言（第2版）',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

// ================== cloudnative ==================
const golangCloudnativeHelm_study_guideConfig: ThemeNote = defineNoteConfig({
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

export {
    golangCloudnativeHelm_study_guideConfig,
    golangLanguageAdvanced_go_programming_and_practical_applicationsConfig,
    golangLanguageGo_in_actionConfig,
    golangLanguageGocookbookConfig,
    golangLanguageLearninggov2cnConfig,
}