import { watch } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useDarkMode() {
  const isDark = useLocalStorage('darkMode', false)

  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  return isDark
}