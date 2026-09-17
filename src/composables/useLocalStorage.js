import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
    const storedValue = localStorage.getItem(key)
    const initialValue = storedValue !== null ? JSON.parse(storedValue) : defaultValue
    const data = ref(initialValue)
    
    watch(data, (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
    })

    return data 
}

