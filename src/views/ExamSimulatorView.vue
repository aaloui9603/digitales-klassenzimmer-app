<script setup>
import { ref, computed } from 'vue'
import { useExamStore } from '@/stores/examStore.js'

const examStore = useExamStore()
const currentQuestionIndex = ref(0)
const lastAnswerCorrect = ref(null)

const isQuizFinished = computed(() => currentQuestionIndex.value >= examStore.questions.length)
const currentQuestion = computed(() => examStore.questions[currentQuestionIndex.value])

function selectAnswer(answer) {
  lastAnswerCorrect.value = examStore.checkAnswer(currentQuestion.value, answer)
  currentQuestionIndex.value++
  examStore.stopQuizTimer()
  examStore.quizTimeLeft = 30
  if (!isQuizFinished.value) {
    examStore.startQuizTimer()
  } else {
    examStore.saveResult()
  }
}
</script>

<template>
  <div>
    <h1 class="bg-marineblau/80 backdrop-blur-md text-white text-3xl font-bold underline text-center mx-auto w-fit px-6 py-2 rounded-full mb-8">
  {{ $t('examTitle') }}
</h1>

    <div v-if="!isQuizFinished" class="bg-dodgerblue/15 backdrop-blur-lg border border-dodgerblue/30 shadow-xl rounded-3xl p-6 max-w-2xl ml-6">
      <p class="mb-4">{{ $t('timeRemaining') }} {{ examStore.quizTimeLeft }}</p>
      <p class="mb-4">{{ $t('score') }} {{ examStore.score }}</p>
      <button @click="examStore.startQuizTimer()" class="mb-4">{{ $t('examStart') }}</button>

      <h2 class="mt-4">{{ currentQuestion.question }}</h2>
      <ul>
        <li v-for="(option, index) in currentQuestion.options" :key="index" class="mb-2">
          <button @click="selectAnswer(option)">{{ option }}</button>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>{{ $t('quizFinished') }}</p>
      <p>{{ $t('yourScore') }} {{ examStore.score }} / {{ examStore.questions.length }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>

