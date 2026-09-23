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
    <h1 class="text-cyan-600">Exam Simulator View</h1>

    <div v-if="!isQuizFinished" class="bg-dodgerblue/15 backdrop-blur-lg border border-dodgerblue/30 shadow-xl rounded-3xl p-6 max-w-2xl">
      <p>Verbleibende Zeit: {{ examStore.quizTimeLeft }} Sekunden</p>
      <p>Punktzahl: {{ examStore.score }}</p>
      <button @click="examStore.startQuizTimer()">Start</button>

      <h2>{{ currentQuestion.question }}</h2>
      <ul>
        <li v-for="(option, index) in currentQuestion.options" :key="index">
          <button @click="selectAnswer(option)">{{ option }}</button>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Quiz beendet! 🎉</p>
      <p>Deine Punktzahl: {{ examStore.score }} von {{ examStore.questions.length }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>