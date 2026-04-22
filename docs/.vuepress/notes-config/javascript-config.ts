import type { ThemeNote } from '../../../vuepress-theme-plume/lib/node'
import { defineNoteConfig } from '../../../vuepress-theme-plume/lib/node'

// ================== build and pack ==================
const javascriptBuildPackWebpackInActionConfig: ThemeNote = defineNoteConfig({
    dir: 'javascript/build_and_pack/webpack_in_action',
    link: '/javascript/build_and_pack/webpack_in_action/',
    sidebar: [
        {
            // 侧边栏title
            text: 'Webpack 实战',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const javascriptBuildPackWebpackInDepthConfig: ThemeNote = defineNoteConfig({
    dir: 'javascript/build_and_pack/webpack_in_depth',
    link: '/javascript/build_and_pack/webpack_in_depth/',
    sidebar: [
        {
            // 侧边栏title
            text: '深入浅出Webpack',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

// ================== language ==================
const javascriptLanguageLxfTutorialConfig: ThemeNote = defineNoteConfig({
    dir: 'javascript/language/lxf_fullstack_javascript_tutorial',
    link: '/javascript/language/lxf_fullstack_javascript_tutorial/',
    sidebar: [
        {
            // 侧边栏title
            text: '廖雪峰 JavaScript 全栈教程',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

const javascriptLanguageModernJavascriptConfig: ThemeNote = defineNoteConfig({
    dir: 'javascript/language/the_modern_javascript_tutorial',
    link: '/javascript/language/the_modern_javascript_tutorial/',
    sidebar: [
        {
            // 侧边栏title
            text: '现代 JavaScript 教程',
            // 折叠侧边栏
            collapsed: false,
            items: 'auto',
        },
    ],
})

export {
    javascriptLanguageLxfTutorialConfig,
    javascriptLanguageModernJavascriptConfig,
    javascriptBuildPackWebpackInActionConfig,
    javascriptBuildPackWebpackInDepthConfig,
}
