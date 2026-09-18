import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ClassroomView from '@/views/ClassroomView.vue'
import StudyPlanerView from '@/views/StudyplanerView.vue'
import ExamSimulatorView from '@/views/ExamSimulatorView.vue'
import VocableTrainerView from '@/views/VocableTrainingView.vue'
import LearningTrackerView from '@/views/LearningTrackerView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView},
        { path: '/classroom', name: 'classroom', component: ClassroomView},
        { path: '/studyplaner', name: 'studyplaner', component: StudyPlanerView},
        { path: '/examsimulator', name: 'examsimulator', component: ExamSimulatorView},
        { path: '/vocabletrainer', name: 'vocabletrainer', component: VocableTrainerView},
        { path: '/learningtracker', name: 'learningtracker', component: LearningTrackerView}
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router