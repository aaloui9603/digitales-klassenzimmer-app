import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage.js'

export const useClassroomStore = defineStore('classroom', () => {
 const students = useLocalStorage('students', [])

 function addStudent(name) {
  students.value.push(name)
}

 function removeStudent(index) {
   students.value.splice(index, 1)
}

return { students, addStudent, removeStudent } 
})
