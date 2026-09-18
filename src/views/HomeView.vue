<script setup>
import { useDarkMode } from '@/composables/useDarkMode.js' 

const isDark = useDarkMode()
</script>

<template>
    <h1 class="text-red-600">HomeView</h1>
    <button @click="isDark =!isDark">Darkmode umschalten</button>
</template>

<style scoped>
</style>