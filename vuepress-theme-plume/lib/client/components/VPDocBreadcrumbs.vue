<script setup lang="ts">
import type {ResolvedSidebarItem} from '../../shared/index.js'
import VPLink from './VPLink.vue'
import {computed} from 'vue'
import {resolveRouteFullPath} from '@vuepress/client'
import {
  useBlogPageData,
  useData,
  useInternalLink,
  useSidebarData,
} from '../composables'

interface Breadcrumb {
  text: string
  link?: string
  current?: boolean
}

const {page, blog} = useData<'post'>()
const {isBlogPost} = useBlogPageData()
const {home, blog: blogLink, categories} = useInternalLink()
const sidebar = useSidebarData()

const hasBreadcrumb = computed(() => {
  if (isBlogPost.value && page.value.categoryList)
    return page.value.categoryList.length > 0
  return sidebar.value.length > 0
})

const breadcrumbList = computed<Breadcrumb[]>(() => {
  if (!hasBreadcrumb.value)
    return []
  const list: Breadcrumb[] = [{text: home.value.text, link: home.value.link}]

  if (isBlogPost.value) {
    if (blog.value.postList ?? true)
      list.push({text: blogLink.value.text, link: blogLink.value.link})

    const categoryList = page.value.categoryList ?? []
    for (const category of categoryList) {
      list.push({
        text: category.name,
        link: categories.value ? `${categories.value.link}?id=${category.id}` : undefined,
      })
    }
  } else if (sidebar.value.length > 0) {
    list.push(...(resolveSidebar(sidebar.value) || []))
  }
  list.push({text: page.value.title, link: page.value.path, current: true})
  return list
})

function resolveSidebar(
    sidebar: ResolvedSidebarItem[],
    result: Breadcrumb[] = [],
): Breadcrumb[] | null {
  for (const item of sidebar) {
    const link = item.link ? resolveRouteFullPath(item.link) : undefined
    if (link === page.value.path) {
      return result
    } else if (item.items) {
      const res = resolveSidebar(
          item.items,
          [...result, {text: item.text!, link: item.link}],
      )
      if (res)
        return res
    }
  }
  return null
}
</script>

<template>
  <nav
      v-if="hasBreadcrumb"
      class="vp-breadcrumb"
  >
    <ol vocab="https://schema.org/" typeof="BreadcrumbList">
      <li
          v-for="({ text, link, current }, index) in breadcrumbList"
          :key="link"
          property="itemListElement"
          typeof="ListItem"
      >
        <VPLink :href="link" class="breadcrumb" :class="{ current }" property="item" typeof="WebPage" :text="text"/>
        <span v-if="index !== breadcrumbList.length - 1" class="vpi-chevron-right"/>
        <meta property="name" :content="text">
        <meta property="position" :content="`${index + 1}`">
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.vp-breadcrumb {
  padding: 2px 0 2px 12px;
  margin-bottom: 1.25rem;
  border-left: solid 3px var(--vp-c-brand-1);
  transition: border-left var(--vp-t-color), color var(--vp-t-color);
}

@media print {
  .vp-breadcrumb {
    display: none;
  }
}

.vp-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  font-size: 15.5px;
  font-weight: 500;
  line-height: 1.6;
}

.vp-breadcrumb ol li {
  display: flex;
  align-items: center;
  min-width: 0;
}

.vp-breadcrumb .breadcrumb {
  display: inline-flex;
  align-items: center;
  max-width: 28em;
  padding: 1px 2px;
  overflow: hidden;
  font-weight: 600;
  color: var(--vp-c-brand-2);
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 3px;
  transition: color var(--vp-t-color), background-color var(--vp-t-color);
}

.vp-breadcrumb .breadcrumb:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.vp-breadcrumb .breadcrumb.current {
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: default;
}

.vp-breadcrumb .vpi-chevron-right {
  width: 1em;
  height: 1em;
  margin-left: 2px;
  color: var(--vp-c-text-3);
  opacity: 0.78;
  transition: color var(--vp-t-color), opacity var(--vp-t-color);
}
</style>
