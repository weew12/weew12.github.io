import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

// =================== language ===================
const javaLanguageJavaCollectionConfig: ThemeNote = defineNoteConfig({
    dir: 'java/language/java_collection',
    link: '/java/language/java_collection/',
    sidebar: [
        {
            // 侧边栏title
            text: 'Java集合框架（AI辅助整理版）',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const javaLanguageShkConfig: ThemeNote = defineNoteConfig({
    dir: 'java/language/shk_java',
    link: '/java/language/shk_java/',
    sidebar: [
        {
            // 侧边栏title
            text: '宋红康Java2023版',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

// =================== ssm ===================
const javaSsmHeimaConfig: ThemeNote = defineNoteConfig({
    dir: 'java/ssm/heima_ssm_book',
    link: '/java/ssm/heima_ssm_book/',
    sidebar: [
        {
            // 侧边栏title
            text: 'JavaEE 企业级应用开发教程',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

export {
    javaLanguageJavaCollectionConfig,
    javaLanguageShkConfig,
    javaSsmHeimaConfig,
}
