import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import InvoicesView from '../views/InvoicesView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'invoices',
    component: InvoicesView,
  },
  {
    path: '/invoices',
    name: 'invoices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: InvoicesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
