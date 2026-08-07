<script lang="ts" setup>
import VPSwitch from './VPSwitch.vue'
import { computed, inject, nextTick, ref, watchPostEffect } from 'vue'
import { enableTransitions, useData } from '../composables'

const checked = ref(false)
const { theme, isDark } = useData()

const transitionMode = computed(() => {
  const transition = theme.value.transition
  const options = typeof transition === 'object' ? transition : {}
  if (transition === false || options.appearance === false)
    return false

  return typeof options.appearance === 'string' ? options.appearance : 'fade'
})

const toggleAppearance = inject('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions() || transitionMode.value === false) {
    isDark.value = !isDark.value
    return
  }

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  const keyframes: PropertyIndexedKeyframes = {}
  const mode = transitionMode.value
  let duration = 400

  if (mode === 'circle-clip') {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
      )}px at ${x}px ${y}px)`,
    ]
    keyframes.clipPath = isDark.value ? clipPath.reverse() : clipPath
  } else if (mode === 'horizontal-clip') {
    const clipPath = [
      `inset(0px ${innerWidth}px 0px 0px)`,
      `inset(0px 0px 0px 0px)`,
    ]
    keyframes.clipPath = isDark.value ? clipPath.reverse() : clipPath
  } else if (mode === 'vertical-clip') {
    const clipPath = [
      `inset(0px 0px ${innerHeight}px 0px)`,
      `inset(0px 0px 0px 0px)`,
    ]
    keyframes.clipPath = isDark.value ? clipPath.reverse() : clipPath
  } else if (mode === 'skew-clip') {
    const clipPath = [
      'polygon(0px 0px, 0px 0px, 0px 0px)',
      `polygon(0px 0px, ${innerWidth * 2}px 0px, 0px ${innerHeight * 2}px)`,
    ]
    keyframes.clipPath = isDark.value ? clipPath.reverse() : clipPath
  } else {
    keyframes.opacity = isDark.value ? [1, 0] : [0, 1]
    duration = 300
  }

  document.documentElement.animate(
    keyframes,
    {
      duration,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})

const switchTitle = ref('')
watchPostEffect(() => {
  switchTitle.value = isDark.value
    ? theme.value.lightModeSwitchTitle || 'Switch to light theme'
    : theme.value.darkModeSwitchTitle || 'Switch to dark theme'
})
</script>

<template>
  <VPSwitch class="vp-switch-appearance" :title="switchTitle" :aria-checked="checked" @click="toggleAppearance">
    <!-- 白天(亮模式)＝吹熄的蜡烛（一缕青烟）；黑夜(暗模式)＝红烛点燃（朱砂焰摇曳 + 柔光）。样式/动画见下方 style。 -->
    <span class="sun candle" aria-hidden="true">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect class="wax" x="6.5" y="7" width="7" height="12" rx="1" />
        <rect class="wick wick--out" x="9.3" y="4.4" width="1.4" height="2.8" rx="0.7" />
        <path class="smoke" d="M10 5 C8 3.6 12 2.2 10 0.8 C9 0.1 10.6 -0.8 10 -1.6" fill="none" />
      </svg>
    </span>
    <span class="moon candle" aria-hidden="true">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect class="wax" x="6.5" y="8.5" width="7" height="10.5" rx="1" />
        <rect class="wick" x="9.3" y="6" width="1.4" height="2.8" rx="0.7" />
        <path class="flame" d="M10 0.2 C13.4 3.6 13.6 6.6 10 9 C6.4 6.6 6.6 3.6 10 0.2 Z" />
      </svg>
    </span>
  </VPSwitch>
</template>

<style scoped>
.sun,
.moon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

[data-theme="dark"] .sun {
  opacity: 0;
}

[data-theme="dark"] .moon {
  opacity: 1;
}

/* ── 蜡烛造型 ───────────────────────────────── */
/* 放开圆形窗的裁切，让烛焰柔光/青烟能溢出圆钮显现 */
.vp-switch-appearance :deep(.icon) {
  overflow: visible;
}
.candle :deep(svg) {
  width: 18px;
  height: 18px;
  overflow: visible;                 /* 让柔光/烟不被 svg 框裁 */
}
.candle :deep(.wax) {
  fill: var(--vp-c-text-2);          /* 烛身：墨色，随明暗自适应 */
}
.candle :deep(.wick) {
  fill: var(--vp-c-text-1);          /* 烛芯 */
}
/* 黑夜点燃的焰：朱砂红 + 柔光，轻微摇曳 */
.moon.candle :deep(.flame) {
  fill: var(--vp-c-brand-1);
  transform-origin: 10px 9px;
  transform-box: fill-box;
  filter: drop-shadow(0 0 4px var(--vp-c-brand-1));
  animation: candle-flicker 1.6s ease-in-out infinite;
}
/* 白天吹熄：焦芯 + 一缕上升青烟 */
.sun.candle :deep(.wick--out) {
  fill: var(--vp-c-text-3);
}
.sun.candle :deep(.smoke) {
  stroke: var(--vp-c-text-3);
  stroke-width: 1;
  stroke-linecap: round;
  opacity: 0.6;
  animation: candle-smoke 3s ease-in-out infinite;
}

@keyframes candle-flicker {
  0%, 100% { transform: scaleY(1) scaleX(1) skewX(0deg); opacity: 1; }
  25%      { transform: scaleY(1.12) scaleX(0.94) skewX(-3deg); opacity: 0.9; }
  50%      { transform: scaleY(0.96) scaleX(1.04) skewX(2deg); opacity: 1; }
  75%      { transform: scaleY(1.08) scaleX(0.97) skewX(-2deg); opacity: 0.95; }
}
@keyframes candle-smoke {
  0%       { opacity: 0; transform: translateY(2px); }
  30%      { opacity: 0.6; }
  100%     { opacity: 0; transform: translateY(-3px); }
}
@media (prefers-reduced-motion: reduce) {
  .moon.candle :deep(.flame),
  .sun.candle :deep(.smoke) { animation: none; }
}

/* 去掉滑动胶囊：轨道收成图标大小、透明无底；圆钮不滑动、无底色阴影，
   只留一支原地切换的蜡烛。点击原地由灭变亮，不再左右滑。
   注意：.vp-switch 与 .vp-switch-appearance 是同一个 button（class 合并），
   故直选本类、不能用后代选择器；带 !important 压过 VPSwitch 的 scoped 值。 */
.vp-switch-appearance {
  width: 22px !important;
  height: 22px !important;
  padding: 0 !important;
  background-color: transparent !important;
  border-radius: 50% !important;
  transition: none !important;
}
.vp-switch-appearance:hover {
  background-color: transparent !important;
}
/* 圆钮铺满放大后的容器并居中，蜡烛才不偏位 */
.vp-switch-appearance :deep(.check) {
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
.vp-switch-appearance :deep(.icon) {
  width: 100%;
  height: 100%;
}
.vp-switch-appearance :deep(.check) {
  top: 2px;
  left: 2px;
  transform: none !important;        /* 覆盖暗色模式原本的 translateX(20px) */
  background-color: transparent;
  box-shadow: none;
  transition: none;
}
/* hover：烛身与焰微微提亮，作可点提示 */
.vp-switch-appearance:hover :deep(.wax) {
  fill: var(--vp-c-text-1);
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  mix-blend-mode: normal;
  animation: none;
}

::view-transition-old(root),
[data-theme="dark"]::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
[data-theme="dark"]::view-transition-old(root) {
  z-index: 9999;
}
</style>
