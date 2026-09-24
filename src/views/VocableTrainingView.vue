<script setup>
import { useVocableTrainingStore } from '@/stores/vocableTrainingStore.js'

const vocableTrainingStore = useVocableTrainingStore()
</script>

<template>
    <h1 class="text-yellow-600">Vocable Training View</h1>

<ul>
  <li v-for="(vocab, index) in vocableTrainingStore.vocabulary" :key="index">
    {{ vocab.word }} - {{ vocab.translation }} (Intervall: {{ vocab.interval }})
    <button @click="vocableTrainingStore.updateInterval(index, true)" class="mr-4">Richtig</button>
    <button @click="vocableTrainingStore.updateInterval(index, false)">Falsch</button>
  </li>
</ul>
</template>

<style scoped>
</style>

