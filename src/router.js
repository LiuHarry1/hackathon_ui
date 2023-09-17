// router.js

import { createRouter, createWebHistory } from 'vue-router';
import ModuleList from './views/ModuleList.vue'
import AssessmentPage from './views/AssessmentPage.vue'

const routes = [
    {
        path: '/',
        component: () => import('./components/LoginPage.vue'),
    },
    {
        path: '/about',
        component: () => import('./components/HelloWorld.vue'),
    },
    {
        path: '/empty-page',
        component: () => import('./components/EmptyPage.vue'),
    },
    {
        path: '/modules',
        name: 'modules',
        component: ModuleList
    },
    {
        path: '/assessment',
        name: 'assessment',
        component: AssessmentPage,
    },
    { path: '/success',
        component: () => import('./components/EmptyPage.vue'),
    },
    { path: '/error',
        component: () => import('./components/Error.vue'),},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
