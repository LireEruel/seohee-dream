<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from './components/layouts/SideMenu.vue'
</script>

<template>
  <div class="main-layout">
    <SideMenu />
    <RouterView />
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
}
</style>
