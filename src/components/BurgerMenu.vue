<script setup>

import { ref } from 'vue' 

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<template>
    <nav class="flex justify-end flex-col items-end">
    <button :aria-expanded="isMenuOpen" @click="toggleMenu" aria-label="Menü öffnen">☰</button>
    <ul v-if="isMenuOpen">
        <li><RouterLink to="/classroom">Klassenzimmer-Verwaltungstool</RouterLink></li> 
        <li><RouterLink to="/studyplaner">Lernplan</RouterLink></li>
        <li><RouterLink to="/examsimulator">Prüfungssimulator</RouterLink></li>
        <li><RouterLink to="/vocabletrainer">Vokabel-Trainer</RouterLink></li>
        <li><RouterLink to ="/learningtracker">Fortschrittsmessung</RouterLink></li>
    </ul>
    </nav>
</template>


