import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import InvoicesView from '../views/InvoicesView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'invoices',
  },
  {
    path: '/invoices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    name: 'invoices',
    component: InvoicesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
