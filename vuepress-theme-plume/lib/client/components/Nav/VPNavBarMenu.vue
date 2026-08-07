<script lang="ts" setup>
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
import {useNavbarData} from '../../composables'

const navbar = useNavbarData()
</script>

<template>
  <nav
      v-if="navbar.length"
      aria-labelledby="main-nav-aria-label"
      class="vp-navbar-menu"
  >
    <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
    <template v-for="item in navbar" :key="item.text">
      <VPNavBarMenuLink v-if="'link' in item" :item="item"/>
      <VPNavBarMenuGroup v-else :item="item"/>
    </template>
  </nav>
</template>

<style scoped>
.vp-navbar-menu {
  display: none;
}

/* 多语言中文一级菜单较宽，768–1280 塞不下会挤出右侧图标；抬到 1280 才展开横排，
   之下统一走汉堡抽屉。须与 VPNavBarHamburger / VPNavScreen / VPNavBarExtra 同步。 */
@media (min-width: 1280px) {
  .vp-navbar-menu {
    display: flex;
  }
}
</style>
