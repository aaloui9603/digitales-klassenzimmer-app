<script setup>
import { useDarkMode } from '@/composables/useDarkMode.js' 

const isDark = useDarkMode()
</script>

<template>
    <h1 class="text-red-600">HomeView</h1>
    <button @click="isDark =!isDark">Darkmode umschalten</button>

    <div class="w-96 mx-auto mt-30 h-64 border-2 border-dashed">Hier erscheint später ein Bild.
    </div>

</template>

<style scoped>
</style>