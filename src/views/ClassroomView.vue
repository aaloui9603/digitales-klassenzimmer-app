<script setup>
import { ref } from 'vue'
import { useClassroomStore } from '@/stores/classroomStore.js'

const classroomStore = useClassroomStore()
const newStudentName = ref('')

function handleAdd() {
  if (newStudentName.value.trim() === '') return
  classroomStore.addStudent(newStudentName.value)
  newStudentName.value = ''
}
</script>

<template>
 <h1 class="text-blue-600">Classroom View</h1>

<div class="bg-white/20 backdrop-blur-md border border-gray70 shadow-md rounded-lg p-4 max-w-2xl">

 <input v-model="newStudentName" @keyup.enter="handleAdd" class="mr-4" />
 <button @click="handleAdd">Eintragen</button>

<ul>
   <li v-for="(student, index) in classroomStore.students" :key="index">
     {{ student }}
   <button @click="classroomStore.removeStudent(index)">Löschen</button>
  </li>
</ul>
</div>
</template>

<style scoped>
</style>

