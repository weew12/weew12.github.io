import type { ThemeNavItem } from '../../vuepress-theme-plume/lib/node'
import { defineNavbarConfig } from '../../vuepress-theme-plume/lib/node'

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: '配置',
    icon: 'icon-park-outline:setting-two',
    link: '/notes/theme/config/intro.md',
    activeMatch: '^/config/',
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    badge: '新',
    items: [
      { text: '常见问题', link: '/faq/', icon: 'wpf:faq' },
      {
        text: 'Vuepress',
        icon: 'logos:vue',
        items: [
          { text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue' },
        ],
      },
    ],
  }
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([

])
