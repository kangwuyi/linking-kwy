<template>
  <a :href="icon" target="_blank" class="alipay-box" aria-label="Support me on alipay">
    <img class="alipay-icon" :src="icon" alt="Alipay" />
  </a>
</template>

<script setup lang="ts">
import icon from '../../assets/alipay.png'
</script>

<style scoped>
.alipay-box {
  position: fixed;
  top: 390px;
  right: 0;
  cursor: pointer;
  z-index: 999;
}
.alipay-box .alipay-icon {
  width: 50px;
  height: auto;
}
</style>
