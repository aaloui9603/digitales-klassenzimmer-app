<script setup>
import { ref } from 'vue'
import { useExamStore } from '@/stores/examStore.js'

const selectedTopic = ref('')

const examStore = useExamStore()

function handleGetTopic() {
  selectedTopic.value = examStore.getRandomTopic('de', 5)
}
</script>

<template>
  <div>
    <h1 class="text-cyan-600">Exam Simulator View</h1>
    <button @click="handleGetTopic">Themen</button>
     {{ selectedTopic }}
   </div>
</template>

<style scoped>
</style>


