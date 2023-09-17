// router.js

import { createRouter, createWebHistory } from 'vue-router';


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
