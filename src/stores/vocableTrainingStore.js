import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useVocableTrainingStore = defineStore('vocableTraining', () => {
  const selectedLanguagePair = ref('de-en')
  const vocabulary = [
    { word: 'Haus', translation: 'house', interval: 1 },
    { word: 'Buch', translation: 'book', interval: 1}
]

function updateInterval(vocabIndex, wasCorrect) {
  if (wasCorrect) {
     vocabulary[vocabIndex].interval = vocabulary[vocabIndex].interval * 2
  } else {
   vocabulary[vocabIndex].interval = 1
}
}

return { vocabulary, updateInterval, selectedLanguagePair }

})
