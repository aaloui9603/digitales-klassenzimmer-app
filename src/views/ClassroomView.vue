<script setup>
import { ref } from 'vue'
import { useClassroomStore } from '@/stores/classroomStore.js'

const classroomStore = useClassroomStore()
const newStudentName = ref('')
const newGrades = ref([])

function handleAdd() {
  if (newStudentName.value.trim() === '') return
  classroomStore.addStudent(newStudentName.value)
  newStudentName.value = ''
}

function handleAddGrade(index) {
classroomStore.addGrade(index, Number(newGrades.value[index]))
newGrades.value[index] = ''
}

</script>

<template>
 <h1 class="text-blue-600">Classroom View</h1>

<div class="bg-white/20 backdrop-blur-md border border-gray70 shadow-md rounded-lg p-4 max-w-2xl">

 <input v-model="newStudentName" @keyup.enter="handleAdd" class="mr-4" />
 <button @click="handleAdd">Eintragen</button>

<ul>
  
   <li v-for="(student, index) in classroomStore.students" :key="index">
     {{ student.name }}
   <button @click="classroomStore.removeStudent(index)">Löschen</button>


<div class="bg-dodgerblue/10 backdrop-blur-md border border-gray76 shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] rounded-lg p-4">
   Noten: {{ student.grades.join(',') }}
   <input v-model="newGrades[index]" type="number" />
   <button @click="handleAddGrade(index)">Note eintragen</button>
</div>
  </li>
</ul>
</div>
</template>

<style scoped>
</style>