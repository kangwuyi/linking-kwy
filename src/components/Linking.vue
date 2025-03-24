<template>
  <Alipay />
  <Kangjian />
  <Kofi />
  <Kwy />
  <Storybook />
  <Github :user="props.user" :repo="props.repo" />
</template>

<script lang="ts" setup>
import Alipay from './alipay/index.vue'
import Kangjian from './kangjian/index.vue'
import Kofi from './kofi/index.vue'
import Kwy from './kwy/index.vue'
import Storybook from './storybook/index.vue'
import Github from './github/index.vue'

import { defineProps } from 'vue'
const props = defineProps({
  user: {
    type: String,
    default: 'kangwuyi',
  },
  repo: {
    type: [String, null],
    required: true,
  },
})
</script>

<style scoped></style>
