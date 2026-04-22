import type { ThemeNavItem } from '../../vuepress-theme-plume/lib/node'
import { defineNavbarConfig } from '../../vuepress-theme-plume/lib/node'

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: '博客',
    link: '/blog/',
    icon: 'mdi:blog-outline',
    // 匹配博客下的所有页面，除了归档、文章归档、文章页
    activeMatch: '^/(?:blog(?!(?:\/tags\/|\/categories\/|\/archives\/))|article)\/.*',
  },
  // {
  //   text: '标签',
  //   link: '/blog/tags/',
  //   icon: 'mdi:tags',
  // },
  // {
  //   text: '分类',
  //   link: '/blog/categories/',
  //   icon: 'mdi:format-list-bulleted-type',
  // },
  // {
  //   text: '归档',
  //   link: '/blog/archives/',
  //   icon: 'mdi:archive',
  // },
  {
    text: 'Java',
    icon: 'devicon:java',
    items: [
      {
        text: '语言基础',
        icon: 'icon-park:send-to-back',
        items: [
          { text: '宋红康Java笔记', link: '/java/language/shk_java/gofne3j6/', icon: 'cib:java' },
          { text: 'Java集合框架（AI辅助整理版）', link: '/java/language/java_collection/nb9o1y1d/', icon: 'cib:java' },
        ],
      },
      {
        text: 'SSM',
        icon: 'simple-icons:springboot',
        items: [
          { text: '《JavaEE 企业级应用开发教程（Spring+Spring MVC+MyBatis）（第二版）》', link: '/java/ssm/heima_ssm_book/r3rcs5o0/', icon: 'skill-icons:spring-light' },
        ],
      },
    ],
  },
  {
    text: 'Golang',
    icon: 'skill-icons:golang',
    items: [
      {
        text: '语言基础',
        icon: 'grommet-icons:golang',
        items: [
          { text: 'Go语言实战', link: '/golang/language/go_in_action/j45197dh/', icon: 'fa7-brands:golang' },
          { text: 'Go语言高级开发与实战', link: '/golang/language/advanced_go_programming_and_practical_applications/urg9wn5u/', icon: 'fa7-brands:golang' },
          { text: 'Go Cookbook 中文版', link: '/golang/language/gocookbook/5urfufzy/', icon: 'fa7-brands:golang' },
          { text: '学习 Go 语言（第2版）', link: '/golang/language/learninggov2cn/m5zwo03b/', icon: 'fa7-brands:golang' },
        ],
      },
      {
        text: '云原生',
        icon: 'skill-icons:kubernetes',
        items: [
          { text: 'Helm 学习指南', link: '/golang/cloudnative/helm_study_guide/v3hzjacm/', icon: 'simple-icons:helm' },
        ],
      }
    ]
  },
  {
    text: 'JavaScript',
    icon: 'logos:javascript',
    items: [
      {
        text: '语言基础',
        icon: 'logos:javascript',
        items: [
          { text: '廖雪峰 JavaScript 全栈教程', link: '/javascript/language/lxf_fullstack_javascript_tutorial/5hcz43fg/', icon: 'bxl:javascript' },
          { text: '现代 JavaScript 教程', link: '/javascript/language/the_modern_javascript_tutorial/lrbohf6z/', icon: 'bxl:javascript' },
        ],
      },
      {
        text: '打包与构建',
        icon: 'devicon:msbuild',
        items: [
          { text: 'Webpack 实战', link: '/javascript/build_and_pack/webpack_in_action/u9et4g8u/', icon: 'logos:webpack' },
          { text: '深入浅出Webpack', link: '/javascript/build_and_pack/webpack_in_depth/uop0xnww/', icon: 'logos:webpack' },
        ],
      }
    ]
  },
  {
    text: 'Rust',
    icon: 'skill-icons:rust',
    link: '/blog/archives/',
  },
  {
    text: '数据库',
    icon: 'streamline-plump-color:database',
    items: [
      {
        text: 'MySQL',
        icon: 'devicon:mysql',
        items: [
          { text: '宋红康MySQL教程', link: '/database/mysql/shk_mysql/q449w0j5/', icon: 'devicon-plain:mysql-wordmark' },
        ],
      },
    ],
  },
  {
    text: '其他',
    icon: 'icon-park:other',
    items: [
      {
        text: '文档',
        icon: 'mdi:book-outline',
        items: [
          { text: 'Golang 标准库文档', link: 'https://weew12.github.io/golang_source/', icon: 'skill-icons:golang' },
        ],
      },
      {
        text: 'Prometheus',
        icon: 'skill-icons:prometheus',
        items: [
          { text: 'Prometheus 技术秘笈', link: '/other/prometheus/prometheus_techniques/7zh9b2gb/', icon: 'cbi:prometheusio' },
          { text: 'Prometheus监控技术与实践', link: '/other/prometheus/prometheus_monitoring_technology_and_practice/emwgzqkx/', icon: 'cbi:prometheusio' },
          { text: 'Prometheus监控实战', link: '/other/prometheus/monitoring_with_prometheus/9qlpfz1i/', icon: 'cbi:prometheusio' },
        ]
      }
    ],
  },
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([

])
