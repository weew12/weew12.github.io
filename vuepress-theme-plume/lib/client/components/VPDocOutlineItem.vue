<script setup lang="ts">
import type { MenuItem } from '../composables'

defineProps<{
  headers: MenuItem[]
  root?: boolean
}>()

function handleClick({ target: el }: Event) {
  const id = `#${(el as HTMLAnchorElement).href!.split('#')[1]}`
  const heading = document.querySelector<HTMLAnchorElement>(
    decodeURIComponent(id),
  )
  heading?.focus({ preventScroll: true })
}
</script>

<template>
  <ul :class="root ? 'root' : 'nested'">
    <li v-for="{ children, link, title } in headers" :key="link">
      <a class="outline-link" :href="link" @click="handleClick">{{ title }}</a>
      <template v-if="children?.length">
        <VPDocOutlineItem :headers="children" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
}

.nested {
  padding-left: 10px;
}

.outline-link {
  display: -webkit-box;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--vp-c-text-2);
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding: 6px 8px 6px 12px;
  margin: 2px 0;
  border-radius: 0;
  transition: color var(--vp-t-color), background-color var(--vp-t-color);
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-brand-1);
  background-color: color-mix(in srgb, var(--vp-c-brand-soft) 72%, transparent);
}

/* .outline-link.nested {
  padding-left: 13px;
} */

.outline-link:hover::before,
.outline-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: calc(100% - 14px);
  min-height: 16px;
  background-color: var(--vp-c-brand-1);
  border-radius: 0;
}

.nested .outline-link {
  padding: 5px 8px 5px 18px;
  font-size: 13px;
  line-height: 19px;
}
</style>
