
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

function getAverage(studentIndex) {
const grades = students.value[studentIndex].grades
if ( grades.length === 0) return 0
const sum = grades.reduce((total, grade) => total + grade, 0)
return sum / grades.length
}

return { students, addStudent, addGrade, removeStudent, getAverage } 
})

