import {defineClientConfig} from '@vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
    enhance({app, router}) {
        // built-in components
        // app.component('RepoCard', RepoCard)
        // app.component('NpmBadge', NpmBadge)
        // app.component('NpmBadgeGroup', NpmBadgeGroup)
        // app.component('Swiper', Swiper) // you should install `swiper`

        // your custom components
        // app.component('CustomComponent', CustomComponent)

        // 百度统计 切换页面时手工上报pv统计
        router.beforeEach((to, from, next) => {
            console.log("切换路由", to.fullPath, from.fullPath);

            //触发百度的pv统计
            if (typeof _hmt != "undefined") {
                if (to.path) {
                    _hmt.push(["_trackPageview", to.fullPath]);
                    console.log("上报百度统计", to.fullPath);
                }
            }
            // continue
            next();
        });
    },
})
