<template>
  <a
    href="https://ko-fi.com/kwy/"
    target="_blank"
    class="kofi-box"
    aria-label="Support me on Ko-fi"
  >
    <img class="kofi-icon" :src="icon" alt="Ko-fi" />
  </a>
</template>

<script setup>
import icon from '../../assets/kofi.png?url'
</script>

<style scoped>
.kofi-box {
  position: fixed;
  top: 330px;
  right: 0;
  cursor: pointer;
  z-index: 999;
}
.kofi-box .kofi-icon {
  width: 60px;
  height: auto;
}
</style>
