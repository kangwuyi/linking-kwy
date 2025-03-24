<template>
  <a href="http://kangkk.com/" target="_blank" class="kangjian-box" aria-label="View kk on web url">
    <img class="kangjian-icon" :src="icon" />
  </a>
</template>

<script setup>
import icon from '../../assets/kangjian.png?url'
</script>

<style scoped>
.kangjian-box {
  position: fixed;
  top: 180px;
  right: 0;
  cursor: pointer;
  z-index: 999;
}
.kangjian-box .kangjian-icon {
  width: 60px;
  height: auto;
}
</style>
