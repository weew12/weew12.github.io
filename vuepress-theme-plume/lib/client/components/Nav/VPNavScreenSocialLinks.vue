<script lang="ts" setup>
import VPSocialLinks from '../VPSocialLinks.vue'
import {useData} from '../../composables'

const {theme} = useData()
</script>

<template>
  <VPSocialLinks
      v-if="theme.social"
      class="vp-nav-screen-social-links"
      :links="theme.social"
  />
</template>
