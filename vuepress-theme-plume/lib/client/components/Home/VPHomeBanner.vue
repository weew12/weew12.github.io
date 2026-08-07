<script setup lang="ts">
import type { ThemeHomeBanner } from '../../../shared'
import VPButton from '../VPButton.vue'
import { computed } from 'vue'
import { withBase } from '@vuepress/client'
import { isLinkHttp } from '@vuepress/shared'
import { useData } from '../../composables'

const props = defineProps<ThemeHomeBanner>()

const DEFAULT_BANNER = 'https://api.pengzhanbo.cn/wallpaper/bing'

const { isDark, frontmatter: matter } = useData<'home'>()

const mask = computed(() => {
  const mask = props.bannerMask ?? matter.value.bannerMask
  if (typeof mask !== 'object')
    return mask || 0

  return (isDark.value ? mask.dark : mask.light) || 0
})

const bannerStyle = computed(() => {
  const banner = props.banner ?? matter.value.banner
  const link = banner ? isLinkHttp(banner) ? banner : withBase(banner) : DEFAULT_BANNER
  return {
    'background-image': `url(${link})`,
  }
})

const name = computed(() => props.hero?.name ?? matter.value.hero?.name ?? 'Plume')
const tagline = computed(() => props.hero?.tagline ?? matter.value.hero?.tagline ?? 'A VuePress Theme')
const text = computed(() => props.hero?.text ?? matter.value.hero?.text)
const actions = computed(() => props.hero?.actions ?? matter.value.hero?.actions ?? [])

// 点击箭头滚动到下一页
const scrollToNextSection = () => {
  window.scrollTo({
    top: window.innerHeight, // 滚动到视口高度位置（Banner 下方）
    behavior: 'smooth' // 平滑滚动
  })
}
</script>

<template>
  <div class="vp-home-banner" :style="bannerStyle">
    <div class="banner-mask" :style="{ opacity: mask }" />
    <div class="container">
      <div class="content">
        <h2 v-if="name" class="hero-name">
          {{ name }}
        </h2>
        <!-- 落款：一叶扁舟。船身用 CSS mask 贴 /hero/sail.svg（其伪元素会被 mask 裁掉），
             故波浪单独作兄弟元素放在场景容器里，画在船下。颜色/动画见 custom.css -->
        <div v-if="name" class="hero-sail-scene" aria-hidden="true">
          <span class="hero-seal" />
          <span class="hero-wave" />
        </div>
        <p v-if="tagline" class="hero-tagline">
          <span class="line" /> <span>{{ tagline }}</span>
        </p>
        <p v-if="text" class="hero-text">
          {{ text }}
        </p>

        <div v-if="actions.length" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton tag="a" size="medium" :theme="action.theme" :text="action.text" :href="action.link" />
          </div>
        </div>
      </div>
    </div>
    <!-- 新增：向下翻页指引箭头 -->
    <div class="scroll-down-arrow" @click="scrollToNextSection">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.vp-home-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--vp-nav-height));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all var(--vp-t-color);
}

.vp-home-banner .banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0);
  transition: opacity var(--vp-t-color);
}

.vp-home-banner .container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  /* padding-top: 4rem; */
  margin: 0 auto;
}

.vp-home-banner .content {
  width: 100%;
  padding: 0 2rem;
}

.vp-home-banner .content .hero-name {
  text-align: center;
  font-size: 72px;
  font-weight: 600;
  line-height: 1;
  color: var(--vp-c-text-hero-name);
}

.vp-home-banner .content .hero-tagline {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--vp-c-text-hero-tagline);
}

.vp-home-banner .content .hero-tagline .line {
  display: inline-block;
  width: 80px;
  height: 0;
  margin-right: 1rem;
  border-top: solid 1px var(--vp-c-text-hero-tagline);
}

.vp-home-banner .content .hero-text {
  width: 100%;
  text-align: right;
  /* max-width: 700px; */
  margin-top: 1.5rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-hero-text);
  border-radius: 5px;
}

/* 新增：向下翻页箭头样式 */
.scroll-down-arrow {
  position: absolute;
  bottom: 2rem;
  /* 箭头距离底部的距离 */
  left: 50%;
  transform: translateX(-50%);
  color: var(--vp-c-text-hero-tagline);
  /* 复用现有文字颜色，适配明暗主题 */
  animation: bounce 2s infinite ease-in-out;
  /* 上下浮动动画 */
  cursor: pointer;
  /* 提示用户可点击/滚动 */
  z-index: 2;
  /* 确保箭头在遮罩层之上 */
  transition: color 0.3s ease;
  /* 颜色过渡动画 */
}

/* 新增：箭头浮动动画 */
@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

/* 新增：箭头hover效果 */
.scroll-down-arrow:hover {
  /* color: var(--vp-c-primary); */
  /* 复用主题主色，增强交互反馈 */
}

/* 原有响应式样式 */
@media (min-width: 960px) {
  .vp-home-banner .container {
    max-width: 768px;
    padding-top: 8rem;
  }

  .vp-home-banner .content .hero-name {
    font-size: 100px;
  }
}

@media (min-width: 1440px) {
  .vp-home-banner .container {
    max-width: 1104px;
    padding-top: 8rem;
  }

  .vp-home-banner .content .hero-tagline {
    font-size: 32px;
  }
}

/* 新增：移动端箭头适配 */
@media (max-width: 768px) {
  .scroll-down-arrow {
    bottom: 1rem;
    width: 24px;
    height: 24px;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-top: 24px;
  margin: -6px;
}

.action {
  flex-shrink: 0;
  padding: 6px;
}
</style>