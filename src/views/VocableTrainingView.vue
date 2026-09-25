<script setup>
import { ref } from 'vue'
import { useVocableTrainingStore } from '@/stores/vocableTrainingStore.js'

const feedback = ref({})

function handleCorrect(index) {
  vocableTrainingStore.updateInterval(index, true)
  feedback.value[index] = 'correct'
}

function handleIncorrect(index) {
  vocableTrainingStore.updateInterval(index, false)
  feedback.value[index] = 'incorrect'
}

const vocableTrainingStore = useVocableTrainingStore()
</script>

<template>
  <h1 class="bg-marineblau/80 backdrop-blur-md text-white text-3xl font-bold underline text-center mx-auto w-fit px-6 py-2 rounded-full mb-8">
    {{ $t('vocableTitle') }}
  </h1>

  <div class="relative z-10 bg-yellow-600/10 backdrop-blur-lg border border-gray70 shadow-xl rounded-3xl p-6 pb-8 max-w-2xl ml-6">
    <ul>
      <li v-for="(vocab, index) in vocableTrainingStore.vocabulary" :key="index" class="mb-4">
        {{ vocab.word }} - {{ vocab.translation }} ({{ $t('intervalLabel') }} {{ vocab.interval }})
          <button @click="handleCorrect(index)" class="mr-4">{{ $t('correctVocab') }}</button>
          <button @click="handleIncorrect(index)">{{ $t('incorrectVocab') }}</button>
        <span v-if="feedback[index] === 'correct'">✅</span>
        <span v-if="feedback[index] === 'incorrect'">🔁</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>