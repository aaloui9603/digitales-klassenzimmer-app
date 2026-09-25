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
  <h1 class="text-gray-600">{{ $t('trackerTitle') }}</h1>
  <p>{{ $t('studentCount') }} {{ classroomStore.students.length }}</p>
  <p>{{ $t('quizAttempts') }} {{ examStore.history.length }}</p>
  <p>{{ $t('currentScore') }} {{ examStore.score }}</p>
  <p>{{ $t('avgVocabInterval') }} {{ averageVocabInterval }}</p>

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