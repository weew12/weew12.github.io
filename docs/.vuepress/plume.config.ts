// 主题配置文件
/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import {defineThemeConfig} from '../../vuepress-theme-plume/lib/node'
// 本顶部导航栏配置
import { zhNavbar } from './navbar-config.js'
// 笔记配置
import {zhNotes } from './notes-config/index.js'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({

    // 导航栏中的logo
    logo: "/logo.png",

    // 是否启用 深色模式
    appearance: true, // 配置 深色模式

    // 个人社交信息配置
    social: [
        {
            icon: "github",
            link: "https://github.com/weew12"
        },
        {
            icon: "qq",
            link: "mailto:2528566339@qq.com",
        },
    ],

    // 允许显示在导航栏的 social 社交链接
    navbarSocialInclude: ['github', 'qq'], 

    // 页内侧边栏， 默认显示在右侧
    aside: true, 

    // 页内大纲， 默认显示 h2, h3
    outline: [2, 3], 

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    copyright: false,

    // 是否启用上一页链接
    prevPage: true,   

    // 是否启用下一页链接
    nextPage: true,   
    
    // 是否启用下一页链接
    createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        message:
        // 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
            '',
        copyright: "Copyright © 2025 weew12",
    },

    /**
     * 配置站点博主的个人信息
     * @see https://theme-plume.vuejs.press/config/basic/#profile
     */
    profile: {
        // 头像地址
        avatar: "/logo.png",
        // 名称
        name: "WEEW12 BLOG",
        // 个人描述
        description: "studing...",
        // 是否为圆形头像
        // circle: true,
        // 用户地理位置
        location: "湖南",
        // 用户所在组织/公司
        // organization: '',
        // 个人信息展示在左侧还是右侧
        layout: "right",
    },

    // 不同语言的文本配置
    // ref: https://theme-plume.vuejs.press/config/locales/
    locales: {
        '/': {
        notes: zhNotes,
        navbar: zhNavbar,
        },
    },

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //   layout: 'top-right',
    //   contentType: 'markdown',
    //   title: '公告板标题',
    //   content: '公告板内容',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
      page: true,        // 启用 页面间跳转过渡动画
      postList: true,    // 启用 博客文章列表过渡动画
      appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    encrypt: {
        rules: {
            // 可以是 md 文件的相对路径，对该文件加密
            '/article/enx7c9s/': '123456',
            // 可以是 文件夹的路径，对该目录下所有文章加密
            // '/notes/vuepress-theme-plume/': '123456',
            // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
            // '/vuepress-theme-plume/': '123456',
            // 可以是 具体的某个页面的请求路径，对该页面加密
            // '/article/f8dnci3/': '123456',
            // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
            // '^/(a|b)/': '123456',
        }
    },

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // }
});
