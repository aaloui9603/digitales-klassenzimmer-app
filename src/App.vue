<script setup>
import BurgerMenu from '@/components/BurgerMenu.vue' 
import LanguageNavigator from '@/components/LanguageNavigator.vue'
</script>

<template>
  <div class="min-h-screen relative pt-20 pb-12 bg-gradient-to-r from-aquamarine from-0% via-aquamarine via-60% to-steelblue1 to-100% dark:from-slateblue4 dark:from-0% dark:via-slateblue4 dark:via-60% dark:to-royalblue3 dark:to-100%">
    <div class="absolute top-4 right-4 flex gap-4 z-50 items-start">
      <BurgerMenu />
      <LanguageNavigator />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>