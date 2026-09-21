<script setup>
import BurgerMenu from '@/components/BurgerMenu.vue' 
import LanguageNavigator from '@/components/LanguageNavigator.vue'
</script>

<template>
  <div class="bg-bg-light dark:bg-bg-dark min-h-screen relative pt-20">
    <div class="absolute top-0 right-0 flex gap-4 z-50">
      <BurgerMenu />
      <LanguageNavigator />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>