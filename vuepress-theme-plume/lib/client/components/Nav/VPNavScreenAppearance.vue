<script lang="ts" setup>
import VPSwitchAppearance from '../VPSwitchAppearance.vue'
import {useData} from '../../composables'

const {theme} = useData()
</script>

<template>
  <div
      v-if="theme.appearance && theme.appearance !== 'force-dark'"
      class="vp-nav-screen-appearance"
  >
    <p class="text">
      {{ theme.appearanceText ?? 'Appearance' }}
    </p>
    <VPSwitchAppearance/>
  </div>
</template>

<style scoped>
.vp-nav-screen-appearance {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 12px 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 5px;
  transition: var(--vp-t-color);
  transition-property: background-color;
}

.text {
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

/* 蜡烛开关全局被锁 22px/SVG18px 以对齐导航栏图标；抽屉里空间大，这尺寸的窄烛身
   会缩成一根细竖条、不像蜡烛。仅在抽屉里放大按钮与 SVG，让蜡烛看清楚（不影响导航栏）。 */
.vp-nav-screen-appearance :deep(.vp-switch-appearance) {
  width: 40px !important;
  height: 40px !important;
}
.vp-nav-screen-appearance :deep(.candle svg) {
  width: 34px !important;
  height: 34px !important;
}
</style>
