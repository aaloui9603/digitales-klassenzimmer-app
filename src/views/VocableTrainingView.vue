<script setup>
import { useVocableTrainingStore } from '@/stores/vocableTrainingStore.js'

const vocableTrainingStore = useVocableTrainingStore()
</script>

<template>
  <h1 class="bg-marineblau/80 backdrop-blur-md text-white text-3xl font-bold underline text-center mx-auto w-fit px-6 py-2 rounded-full mb-8">
  {{ $t('vocableTitle') }}
</h1>

  <ul>
    <li v-for="(vocab, index) in vocableTrainingStore.vocabulary" :key="index">
      {{ vocab.word }} - {{ vocab.translation }} ({{ $t('intervalLabel') }} {{ vocab.interval }})
      <button @click="vocableTrainingStore.updateInterval(index, true)" class="mr-4">{{ $t('correctVocab') }}</button>
      <button @click="vocableTrainingStore.updateInterval(index, false)">{{ $t('incorrectVocab') }}</button>
    </li>
  </ul>
</template>

<style scoped>
</style>