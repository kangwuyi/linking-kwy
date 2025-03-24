<template>
  <h1 @click.native="console.log('hi~')">Linking KWY</h1>

  <div class="container">
    <Linking repo="linking-kwy" />
  </div>
</template>

<script setup lang="ts">
import Linking from './components/Linking.vue'
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
