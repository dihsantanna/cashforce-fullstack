import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import InvoicesView from '../views/InvoicesView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: 'invoices',
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: InvoicesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
