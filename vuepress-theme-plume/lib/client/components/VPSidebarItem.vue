<script setup lang="ts">
import type { ResolvedSidebarItem } from '../../shared/index.js'
import VPBadge from './global/VPBadge.vue'
import VPIcon from './VPIcon.vue'
import VPLink from './VPLink.vue'
import { FadeInExpandTransition } from '@vuepress/helper/client'
import { computed } from 'vue'
import { useSidebarControl } from '../composables'

import '@vuepress/helper/transition/fade-in-height-expand.css'

const props = defineProps<{
  item: ResolvedSidebarItem
  depth: number
}>()

const {
  collapsed,
  collapsible,
  isLink,
  isActiveLink,
  hasActiveLink,
  hasChildren,
  toggle,
} = useSidebarControl(computed(() => props.item))

const sectionTag = computed(() => (hasChildren.value ? 'section' : `div`))

const linkTag = computed(() => (isLink.value ? 'a' : 'div'))

const textTag = computed(() => {
  return !hasChildren.value
    ? 'p'
    : props.depth + 2 === 7
      ? 'p'
      : `h${props.depth + 2}`
})

const itemRole = computed(() => (isLink.value ? undefined : 'button'))

const isSeparator = computed(() => props.item.link?.startsWith('---'))

const classes = computed(() => [
  [`level-${props.depth}`],
  { collapsible: collapsible.value },
  { collapsed: collapsed.value },
  { 'is-link': isLink.value },
  { 'is-active': isActiveLink.value },
  { 'has-active': hasActiveLink.value },
])

function onItemInteraction(e: MouseEvent | Event) {
  if ('key' in e && e.key !== 'Enter')
    return

  if (!props.item.link) {
    toggle()
  }
}

function onCaretClick() {
  if (props.item.link) {
    toggle()
  }
}
</script>

<template>
  <Component :is="sectionTag" class="vp-sidebar-item sidebar-item" :class="classes">
    <div v-if="item.text" class="item" :role="itemRole" :tabindex="item.items && 0" v-on="item.items
      ? { click: onItemInteraction, keydown: onItemInteraction }
      : {}
      ">
      <div class="indicator" />

      <VPIcon v-if="item.icon" :name="item.icon" :class="{ separator: isSeparator }" />

      <VPLink v-if="item.link && !isSeparator" :tag="linkTag" class="link" :href="item.link">
        <Component :is="textTag" class="text">
          <span v-html="item.text" />
          <VPBadge v-if="item.badge" class="vp-menu-badge"
            v-bind="typeof item.badge === 'string' ? { text: item.badge } : item.badge" />
        </Component>
      </VPLink>

      <Component :is="textTag" v-else class="text" :class="{ separator: isSeparator }">
        <span v-html="item.text" />
        <VPBadge v-if="item.badge" class="vp-menu-badge"
          v-bind="typeof item.badge === 'string' ? { text: item.badge } : item.badge" />
      </Component>

      <div v-if="item.collapsed != null" class="caret" role="button" aria-label="toggle section" tabindex="0"
        @click="onCaretClick" @keydown.enter="onCaretClick">
        <span class="vpi-chevron-right caret-icon" />
      </div>
    </div>

    <template v-if="item.items && item.items.length && depth < 5">
      <FadeInExpandTransition>
        <div v-show="!collapsed">
          <div class="items">
            <VPSidebarItem v-for="i in item.items" :key="i.text" :item="i" :depth="depth + 1" />
          </div>
        </div>
      </FadeInExpandTransition>
    </template>
  </Component>
</template>

<style scoped>
.vp-sidebar-item.level-0 {
  padding-bottom: 20px;
}

.vp-sidebar-item.collapsed.level-0 {
  padding-bottom: 12px;
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all var(--vp-t-color);
  margin: 2px 0;
}

.vp-sidebar-item.collapsible>.item {
  cursor: pointer;
}

.item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

[data-theme="dark"] .item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.indicator {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: -16px;
  width: 2px;
  border-radius: 1px;
  transition: all var(--vp-t-color);
  opacity: 0;
}

.vp-sidebar-item.level-1.is-active>.item>.indicator {
  opacity: 1;
  background-color: var(--vp-c-brand-1);
  transform: translateX(0);
}

.vp-sidebar-item.level-1.is-active>.item>.indicator,
.vp-sidebar-item.level-2.is-active>.item>.indicator,
.vp-sidebar-item.level-3.is-active>.item>.indicator,
.vp-sidebar-item.level-4.is-active>.item>.indicator,
.vp-sidebar-item.level-5.is-active>.item>.indicator {
  opacity: 1;
  background-color: var(--vp-c-brand-1);
}

.link {
  display: block;
  flex: 1 1;
  text-decoration: none;
}

.text {
  display: inline-block;
  flex-grow: 1;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  transition: color var(--vp-t-color);
  font-family: var(--vp-font-family-base);
}

.vp-sidebar-item.level-0 .text {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.vp-sidebar-item.level-1 .text,
.vp-sidebar-item.level-2 .text,
.vp-sidebar-item.level-3 .text,
.vp-sidebar-item.level-4 .text,
.vp-sidebar-item.level-5 .text {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.vp-sidebar-item.level-1 .text.separator,
.vp-sidebar-item.level-2 .text.separator,
.vp-sidebar-item.level-3 .text.separator,
.vp-sidebar-item.level-4 .text.separator,
.vp-sidebar-item.level-5 .text.separator {
  color: var(--vp-c-text-3);
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.vp-sidebar-item.level-0 :deep(.vp-icon.separator),
.vp-sidebar-item.level-1 :deep(.vp-icon.separator),
.vp-sidebar-item.level-2 :deep(.vp-icon.separator),
.vp-sidebar-item.level-3 :deep(.vp-icon.separator),
.vp-sidebar-item.level-4 :deep(.vp-icon.separator),
.vp-sidebar-item.level-5 :deep(.vp-icon.separator) {
  color: var(--vp-c-text-3) !important;
}

.vp-sidebar-item.level-0.has-active>.item>.text,
.vp-sidebar-item.level-1.has-active>.item>.text,
.vp-sidebar-item.level-2.has-active>.item>.text,
.vp-sidebar-item.level-3.has-active>.item>.text,
.vp-sidebar-item.level-4.has-active>.item>.text,
.vp-sidebar-item.level-5.has-active>.item>.text,
.vp-sidebar-item.level-0.has-active>.item>.link>.text,
.vp-sidebar-item.level-1.has-active>.item>.link>.text,
.vp-sidebar-item.level-2.has-active>.item>.link>.text,
.vp-sidebar-item.level-3.has-active>.item>.link>.text,
.vp-sidebar-item.level-4.has-active>.item>.link>.text,
.vp-sidebar-item.level-5.has-active>.item>.link>.text {
  color: var(--vp-c-text-1);
}

.vp-sidebar-item.level-0.is-active>.item .link>.text,
.vp-sidebar-item.level-1.is-active>.item .link>.text,
.vp-sidebar-item.level-2.is-active>.item .link>.text,
.vp-sidebar-item.level-3.is-active>.item .link>.text,
.vp-sidebar-item.level-4.is-active>.item .link>.text,
.vp-sidebar-item.level-5.is-active>.item .link>.text {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.vp-sidebar-item.level-0.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-1.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-2.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-3.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-4.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-5.is-link>.item>.link:hover .text,
.vp-sidebar-item.level-0.is-link>.item>.link:hover :deep(.vp-icon),
.vp-sidebar-item.level-1.is-link>.item>.link:hover :deep(.vp-icon),
.vp-sidebar-item.level-2.is-link>.item>.link:hover :deep(.vp-icon),
.vp-sidebar-item.level-3.is-link>.item>.link:hover :deep(.vp-icon),
.vp-sidebar-item.level-4.is-link>.item>.link:hover :deep(.vp-icon),
.vp-sidebar-item.level-5.is-link>.item>.link:hover :deep(.vp-icon) {
  color: var(--vp-c-brand-1);
}

.caret {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: -4px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border-radius: 6px;
  transition: all var(--vp-t-color);
  flex-shrink: 0;
}

.caret:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--vp-c-text-1);
}

[data-theme="dark"] .caret:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.item :deep(.vp-icon) {
  align-self: center;
  margin: 0 8px 0 0;
  font-size: 16px;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
  flex-shrink: 0;
}

.item :deep(.vp-icon-img) {
  height: 16px;
  margin: 0 8px 0 0;
  flex-shrink: 0;
}

.item :deep(.vp-icon.fontawesome) {
  line-height: 1;
}

/* .item:hover .caret {
  color: var(--vp-c-text-2);
}

.item:hover .caret:hover {
  color: var(--vp-c-text-1);
} */

.vp-sidebar-item.level-0.is-active>.item> :deep(.vp-icon),
.vp-sidebar-item.level-1.is-active>.item> :deep(.vp-icon),
.vp-sidebar-item.level-2.is-active>.item> :deep(.vp-icon),
.vp-sidebar-item.level-3.is-active>.item> :deep(.vp-icon),
.vp-sidebar-item.level-4.is-active>.item> :deep(.vp-icon),
.vp-sidebar-item.level-5.is-active>.item> :deep(.vp-icon) {
  color: var(--vp-c-brand-1);
}

.vp-sidebar-item.level-0.is-link>.item:hover :deep(.vp-icon),
.vp-sidebar-item.level-1.is-link>.item:hover :deep(.vp-icon),
.vp-sidebar-item.level-2.is-link>.item:hover :deep(.vp-icon),
.vp-sidebar-item.level-3.is-link>.item:hover :deep(.vp-icon),
.vp-sidebar-item.level-4.is-link>.item:hover :deep(.vp-icon),
.vp-sidebar-item.level-5.is-link>.item:hover :deep(.vp-icon) {
  color: var(--vp-c-brand-1);
}

.caret-icon {
  width: 16px;
  height: 16px;
  fill: currentcolor;
  transition: transform var(--vp-t-color);
  transform: rotate(90deg);
}

.vp-sidebar-item.collapsed .caret-icon {
  transform: rotate(0);
}

.vp-sidebar-item.level-1 .items,
.vp-sidebar-item.level-2 .items,
.vp-sidebar-item.level-3 .items,
.vp-sidebar-item.level-4 .items,
.vp-sidebar-item.level-5 .items {
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  transition: border-left var(--vp-t-color);
  margin-left: 12px;
}

.vp-sidebar-item .text :deep(.vp-menu-badge) {
  padding: 3px 8px;
  margin-top: 0;
  margin-left: 8px;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.2px;
  border-radius: 12px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  transition: all var(--vp-t-color);
}

.vp-sidebar-item.collapsible>.item .text :deep(.vp-menu-badge) {
  transform: none;
}

.vp-sidebar-item.is-active .text :deep(.vp-menu-badge) {
  background-color: var(--vp-c-brand-1);
  color: white;
}
</style>
