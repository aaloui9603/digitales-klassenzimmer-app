<script setup>

import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const isOpen = ref(false)

const languages = [
{ code: 'de', label: 'Deutsch' },
{ code: 'en', label: 'English' },
{ code: 'tr', label: 'Türkisch' },
{ code: 'fr', label: 'Français' },
{ code: 'es', label: 'Español' },
{ code: 'it', label: 'Italiano' }
]

function selectLanguage(code) {
locale.value = code
isOpen.value = false
}
</script>

<template>
  <nav>
    <button @click="isOpen = !isOpen" aria-label="Sprache wählen" :aria-expanded="isOpen">🌐</button>
    <ul v-if="isOpen">
      <li v-for="lang in languages" :key="lang.code">
        <button @click="selectLanguage(lang.code)">{{ lang.label }}</button>
      </li>
    </ul>
  </nav>
</template>