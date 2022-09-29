import { Invoice } from '@/types/Invoice.interface';
import { createStore } from 'vuex';

export default createStore({
  state: {
    invoices: [] as Invoice[],
  },
  mutations: {
    setInvoices(state, payload: Invoice[]) {
      state.invoices = [...payload];
    },
  },
});
