import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  const timeLeft = ref(1500)
  const isRunning = ref(false)
  let intervalId = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  })

  function startTimer() {
    if (isRunning.value) return
    isRunning.value = true
    intervalId = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      } else {
        stopTimer()
      }
    }, 1000)
  }

  function stopTimer() {
    isRunning.value = false
    clearInterval(intervalId)
  }

  return { timeLeft, isRunning, formattedTime, startTimer, stopTimer }
})