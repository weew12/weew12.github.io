<script setup lang="ts">
import type {ThemeHomeCustom} from '../../../shared'
import VPHomeBox from './VPHomeBox.vue'
import {Content} from '@vuepress/client'

const props = defineProps<ThemeHomeCustom>()
</script>

<template>
  <VPHomeBox class="vp-home-custom" v-bind="props">
    <Content class="vp-doc" vp-content/>
  </VPHomeBox>
</template>
