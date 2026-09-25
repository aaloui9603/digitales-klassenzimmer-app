<script setup>

import { ref } from 'vue' 

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<template>
    <nav class="flex justify-end flex-col items-end">
    <button :aria-expanded="isMenuOpen" @click="toggleMenu" aria-label="Menü öffnen" class="bg-marineblau/20 backdrop-blur-md border border-marineblau/30 rounded-full w-10 h-10 text-white">☰</button>
    <ul v-if="isMenuOpen" class="bg-marineblau/20 backdrop-blur-lg border border-marineblau/30 shadow-xl rounded-2xl p-4 mt-2 text-white">
        <li><RouterLink to="/classroom">Klassenzimmer-Verwaltungstool</RouterLink></li> 
        <li><RouterLink to="/studyplaner">Lernplan</RouterLink></li>
        <li><RouterLink to="/examsimulator">Prüfungssimulator</RouterLink></li>
        <li><RouterLink to="/vocabletrainer">Vokabel-Trainer</RouterLink></li>
        <li><RouterLink to ="/learningtracker">Fortschrittsmessung</RouterLink></li>
    </ul>
    </nav>
</template>


