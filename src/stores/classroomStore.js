
import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage.js'

export const useClassroomStore = defineStore('classroom', () => {
 const students = useLocalStorage('students', [])

 function addStudent(name) {
  students.value.push({ name: name, grades: [] })
}

function addGrade(studentIndex, grade) {
students.value[studentIndex].grades.push(grade)
}

 function removeStudent(index) {
   students.value.splice(index, 1)
}

return { students, addStudent, addGrade, removeStudent } 
})

