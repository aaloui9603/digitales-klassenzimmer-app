<script setup>
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode.js' 
import slide1 from '@/assets/Retro_Symbol_School.jpeg'
import slide2 from '@/assets/classroom_people.jpeg'
import slide3 from '@/assets/digital-classroom.jpeg'

const slides = [slide1, slide2, slide3]

const isDark = useDarkMode()

const currentSlide = ref(0)

function nextSlide() {
   currentSlide.value = (currentSlide.value + 1) % slides.length
}

setInterval(nextSlide, 4000)
</script>

<template>
    <h1 class="bg-marineblau/80 backdrop-blur-md text-white text-3xl font-bold underline text-center mx-auto w-fit px-6 py-2 rounded-full mb-8">
      {{ $t('welcome') }}
    </h1>
    <button @click="isDark =!isDark">{{ $t('darkModeToggle') }}</button>

    <img :src="slides[currentSlide]" class="w-96 mx-auto mt-15 h-64 object-cover rounded-lg" alt="Klassenraum-Impression" />

    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        :class="index === currentSlide ? 'bg-dodgerblue' : 'bg-gray70'"
        class="w-3 h-3 rounded-full"
      ></button>
    </div>

</template>

<style scoped>
</style>