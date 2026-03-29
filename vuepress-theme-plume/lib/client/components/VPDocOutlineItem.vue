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
  padding-left: 13px;
}

.outline-link {
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  color: var(--vp-c-text-2);
  text-overflow: ellipsis;
  white-space: nowrap;
  /* transition: color var(--vp-t-color); */
  transition: all var(--vp-t-color);
  padding: 0 6px;
  margin: 1px 0;
  border-radius: 0px;
  position: relative;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  padding-left: 8px;
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
  height: 18px;
  background-color: var(--vp-c-brand-1);
  border-radius: 0 2px 2px 0;
}

.nested .outline-link {
  padding: 0 12px 0 25px;
}

.nested .outline-link:hover,
.nested .outline-link.active {
  padding-left: 29px;
}
</style>
