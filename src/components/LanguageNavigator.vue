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
  <nav class="flex flex-col items-end">
    <button
      @click="isOpen = !isOpen"
      aria-label="Sprache wählen"
      :aria-expanded="isOpen"
      class="bg-marineblau/20 backdrop-blur-md border border-marineblau/30 rounded-full w-10 h-10 text-white"
    >🌐</button>

    <ul
      v-if="isOpen"
      class="bg-marineblau/20 backdrop-blur-lg border border-marineblau/30 shadow-xl rounded-2xl p-4 mt-2 text-white"
    >
      <li v-for="lang in languages" :key="lang.code">
        <button @click="selectLanguage(lang.code)" class="block w-full text-left py-1">{{ lang.label }}</button>
      </li>
    </ul>
  </nav>
</template>