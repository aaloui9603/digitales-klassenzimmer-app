<script setup>
import { computed } from 'vue'
import { useClassroomStore } from '@/stores/classroomStore.js'
import { useExamStore } from '@/stores/examStore.js'
import { useVocableTrainingStore } from '@/stores/vocableTrainingStore.js'

const classroomStore = useClassroomStore()
const examStore = useExamStore()
const vocableTrainingStore = useVocableTrainingStore()

const averageVocabInterval = computed(() => {
const vocabulary = vocableTrainingStore.vocabulary
    const sum = vocabulary.reduce((total, vocab) => total + vocab.interval, 0)
    return sum / vocabulary.length
})
</script>

<template>
    <h1 class="text-gray-600">Learning Tracker View</h1>
    <p>Anzahl Schüler: {{ classroomStore.students.length }}</p>
    <p>Anzahl Quiz-Versuche: {{ examStore.history.length }}</p>
    <p>Aktueller Quiz-Score: {{ examStore.score }}</p>
    <p>Durchschnittliches Vokabel-Intervall: {{ averageVocabInterval }}</p>

<div class="bg-mediumblue/20 mb-3 rounded-full h-4 w-full">
  <div class="bg-mediumblue h-4 rounded-full" :style="{ width: (classroomStore.students.length / 20 * 100) + '%' }"></div>
</div>

<div class="bg-mediumblue/20 mb-3 rounded-full h-4 w-full">
  <div class="bg-mediumblue h-4 rounded-full" :style="{ width: (examStore.history.length / 10 * 100) + '%' }"></div>
</div>

<div class="bg-mediumblue/20 mb-3 rounded-full h-4 w-full">
  <div class="bg-mediumblue h-4 rounded-full" :style="{ width: (examStore.score / 10 * 100) + '%' }"></div>
</div>

<div class="bg-mediumblue/20 mb-3 rounded-full h-4 w-full">
  <div class="bg-mediumblue h-4 rounded-full" :style="{ width: (averageVocabInterval / 20 * 100) + '%' }"></div>
</div>
</template>

<style scoped>
</style>

