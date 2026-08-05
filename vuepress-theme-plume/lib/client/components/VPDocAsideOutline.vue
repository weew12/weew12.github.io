<script lang="ts" setup>
import VPDocOutlineItem from './VPDocOutlineItem.vue'
import {computed, ref} from 'vue'
import {useActiveAnchor, useData, useHeaders} from '../composables'

const {theme} = useData()

const headers = useHeaders()
const hasOutline = computed(() => headers.value.length > 0)

const container = ref()
const marker = ref()

useActiveAnchor(container, marker)

function handlePrint() {
  window.print()
}
</script>

<template>
  <nav
      ref="container"
      aria-labelledby="doc-outline-aria-label"
      class="vp-doc-aside-outline"
      :class="{ 'has-outline': hasOutline }"
      role="navigation"
  >
    <div class="content">
      <div ref="marker" class="outline-marker"/>

      <div
          id="doc-outline-aria-label"
          aria-level="2"
          class="outline-title"
          role="heading"
      >
        <span>{{ theme.outlineLabel || 'On this page' }}</span>
        <span class="vpi-print icon" @click="handlePrint"/>
      </div>

      <VPDocOutlineItem :headers="headers" :root="true"/>
    </div>
  </nav>
</template>

<style scoped>
.vp-doc-aside-outline {
  display: none;
}

.vp-doc-aside-outline.has-outline {
  display: block;
}

.content {
  position: relative;
  padding: 12px 10px 12px 14px;
  font-size: 13px;
  font-weight: 500;
  background-color: color-mix(in srgb, var(--vp-c-bg) 76%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 72%, transparent);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.035);
  transition: background-color var(--vp-t-color), border-color var(--vp-t-color), box-shadow var(--vp-t-color);
}

.outline-marker {
  /* position: absolute;
  top: 32px;
  left: -1px;
  z-index: 0;
  width: 2px;
  height: 18px;
  background-color: var(--vp-c-brand-1);
  border-radius: 2px;
  opacity: 0;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1),
  background-color var(--vp-t-color),
  opacity var(--vp-t-color); */
  display: none;
}

.outline-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px 8px;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid color-mix(in srgb, var(--vp-c-divider) 68%, transparent);
}

.outline-title .icon {
  flex: 0 0 auto;
  margin-left: 8px;
  font-size: 1.2em;
  cursor: pointer;
  color: var(--vp-c-text-3);
  transition: color var(--vp-t-color);
}

.outline-title .icon:hover {
  color: var(--vp-c-brand-1);
}
</style>
