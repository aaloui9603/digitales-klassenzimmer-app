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
  <h1 class="text-blue-600">{{ $t('classroomTitle') }}</h1>

  <div class="bg-white/20 backdrop-blur-md border border-gray70 shadow-md rounded-lg p-4 max-w-2xl">
    <label for="student-name">{{ $t('studentNameLabel') }}</label>
    <input id="student-name" v-model="newStudentName" @keyup.enter="handleAdd" class="mr-4" />
    <button @click="handleAdd">{{ $t('addButton') }}</button>

    <ul>
      <li v-for="(student, index) in classroomStore.students" :key="index">
        {{ student.name }}
        <button @click="classroomStore.removeStudent(index)">{{ $t('removeButton') }}</button>

        <div class="bg-dodgerblue/10 backdrop-blur-md border border-gray76 shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] rounded-lg p-4">
          {{ $t('gradesLabel') }} {{ student.grades.join(',') }}
          <label :for="'grade-input-' + index">{{ $t('newGradeLabel') }}</label>
          <input :id="'grade-input-' + index" v-model="newGrades[index]" type="number" />
          <button @click="handleAddGrade(index)">{{ $t('addGradeButton') }}</button>
        </div>
        <div>
          {{ $t('averageLabel') }} {{ classroomStore.getAverage(index).toFixed(2) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
