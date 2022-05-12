import { Invoice } from '@/types/Invoice.interface';
import { createStore } from 'vuex';

export default createStore({
  state: {
    invoices: [] as Invoice[],
  },
  getters: {
    getInvoices(state) {
      return state.invoices;
    },
    getProviders: (state) => (id: number) => (
      state.invoices.find((invoice) => invoice.id === id)
    ),
  },
  mutations: {
    setInvoices(state, payload: Invoice[]) {
      state.invoices = [...payload];
    },
  },
});
