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
  <h1 class="bg-marineblau/80 backdrop-blur-md text-white text-3xl font-bold underline text-center mx-auto w-fit px-6 py-2 rounded-full mb-12">
    {{ $t('classroomTitle') }}
  </h1>

  <div class="bg-white/20 backdrop-blur-md border border-gray70 shadow-md rounded-lg p-4 pb-12 max-w-2xl ml-6">
    <label for="student-name" class="mr-3">{{ $t('studentNameLabel') }}</label>
    <input id="student-name" v-model="newStudentName" @keyup.enter="handleAdd" class="bg-white/20 backdrop-blur-md border border-gray70 rounded-lg px-3 py-2 mr-4 w-48" />
    <button @click="handleAdd">{{ $t('addButton') }}</button>

    <ul class="mt-4">
      <li v-for="(student, index) in classroomStore.students" :key="index" class="mb-6">
        {{ student.name }}
        <button @click="classroomStore.removeStudent(index)">{{ $t('removeButton') }}</button>

        <div class="bg-dodgerblue/10 backdrop-blur-md border border-gray76 shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] rounded-lg p-4 mt-2">
          <span class="mr-3">{{ $t('gradesLabel') }} {{ student.grades.join(',') }}</span>
          <label :for="'grade-input-' + index" class="mr-2">{{ $t('newGradeLabel') }}</label>
          <input :id="'grade-input-' + index" v-model="newGrades[index]" type="number" class="bg-white/20 backdrop-blur-md border border-gray70 rounded-lg px-3 py-2 w-16 mr-3" />
          <button @click="handleAddGrade(index)">{{ $t('addGradeButton') }}</button>
        </div>
        <div class="mt-2">
          {{ $t('averageLabel') }} {{ classroomStore.getAverage(index).toFixed(2) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>