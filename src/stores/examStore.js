import { defineStore } from 'pinia'


export const useExamStore = defineStore('exam', () => {
const topics = {
    de: {
     5: ['Bruchrechnung', 'Wortarten', 'Tierlebensräume'],
     6: ['Prozentrechnung', 'Zeitformen', 'Klimazonen']
  }
}

function getRandomTopic(language, grade) {
  const topicList = topics[language][grade]
  const randomIndex = Math.floor(Math.random() * topicList.length)
  return topicList[randomIndex]
 }

return { topics, getRandomTopic }
})


