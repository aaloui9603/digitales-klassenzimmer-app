
import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage.js'

export const useStudyplanerStore = defineStore('studyplaner', () => {
  const sessions = useLocalStorage('sessions', [])

 function addSession(subject, date) {
  sessions.value.push({ subject: subject, date: date })
}

 function removeSession(index) {
   sessions.value.splice(index, 1)
}


return { sessions, addSession, removeSession } 
})

