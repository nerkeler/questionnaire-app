import { createRouter, createWebHistory } from 'vue-router'

import Questionnaire from '../components/Questionnaire.vue'

const routes = [
  {
    path: '/',
    name: 'questionnaire',
    component: Questionnaire
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router