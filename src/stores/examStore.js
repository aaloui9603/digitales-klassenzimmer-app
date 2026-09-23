import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamStore = defineStore('exam', () => {
  const topics = {
    de: {
      5: ['Bruchrechnung', 'Wortarten', 'Tierlebensräume'],
      6: ['Prozentrechnung', 'Zeitformen', 'Klimazonen']
    }
  }

  const questions = [
    {
      question: 'Was ist 1/2 + 1/4?',
      options: ['3/4', '2/6', '1/6', '2/4'],
      correctAnswer: '3/4'
    },
    {
      question: 'Was ist 3/4 - 1/4?',
      options: ['1/2', '2/4', '4/4', '1/4'],
      correctAnswer: '1/2'
    }
  ]

  const quizTimeLeft = ref(30)
  const quizIsRunning = ref(false)
  let quizIntervalId = null

  function getRandomTopic(language, grade) {
    const topicList = topics[language][grade]
    const randomIndex = Math.floor(Math.random() * topicList.length)
    return topicList[randomIndex]
  }

  function startQuizTimer() {
    if (quizIsRunning.value) return
    quizIsRunning.value = true
    quizIntervalId = setInterval(() => {
      if (quizTimeLeft.value > 0) {
        quizTimeLeft.value--
      } else {
        stopQuizTimer()
      }
    }, 1000)
  }

  function stopQuizTimer() {
    quizIsRunning.value = false
    clearInterval(quizIntervalId)
  }

  return { topics, questions, getRandomTopic, quizTimeLeft, quizIsRunning, startQuizTimer, stopQuizTimer }
})