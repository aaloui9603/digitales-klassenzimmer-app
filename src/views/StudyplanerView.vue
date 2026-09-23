<script setup>
import { ref } from 'vue'
import { useStudyplanerStore } from '@/stores/studyplanerStore.js'
import { usePomodoroStore } from '@/stores/pomodoroStore.js'

const pomodoroStore = usePomodoroStore()

const studyplanerStore = useStudyplanerStore()
const newSubject = ref('')
const newDate = ref('')

function handleAdd() {
  if (newSubject.value.trim() === '') return
  studyplanerStore.addSession(newSubject.value, newDate.value)
  newSubject.value = ''
  newDate.value = ''
}
</script>

<template>
<div class="bg-royalblue2/15 backdrop-blur-lg border border-royalblue2/30 shadow-xl rounded-3xl p-6">
  <input v-model="newSubject" placeholder="Fach" class="mr-4" />
  <input v-model="newDate" type="date" class="mr-4" />
  <button @click="handleAdd">Eintragen</button>

<div class="bg-mediumblue/15 backdrop-blur-lg border border-mediumblue/30 shadow-xl rounded-3xl p-6">
  {{ pomodoroStore.formattedTime }}
  <button @click="pomodoroStore.startTimer()">Start</button>
  <button @click="pomodoroStore.stopTimer()">Pause</button>
</div>

 <ul>
   <li v-for="(session, index) in studyplanerStore.sessions" :key="index">
        {{ session.subject }} {{ session.date }}
        <button @click="studyplanerStore.removeSession(index)">Löschen</button>
   </li>
 </ul>
 </div>


</template>