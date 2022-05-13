<template>
  <div class="invoice-list-container">
    <div class="head-list mb-2">
      <div class="title d-flex">
        <img class="me-2" alt="logo_table" src="@/assets/hands-dark.svg" />
        Notas fiscais
      </div>
      <span class="description">Visualize as notas fiscais que você tem.</span>
    </div>
    <div>
      <table v-if="!loading">
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="box-style"
            v-bind:key="invoice.id" v-for="invoice in invoices">
            <td :key="invoice.id">{{invoice.nNf}}</td>
            <td :key="invoice.id" >{{invoice.buyer.name}}</td>
            <td :key="invoice.id" >{{invoice.provider.name}}</td>
            <td :key="invoice.id" >
              {{moment(invoice.emissionDate).locale('pt-br').format('DD/MM/YY')}}
            </td>
            <td class="green-data" :key="invoice.id" >{{toBRL(invoice.value)}}</td>
            <td :class="`${colorStatus[invoice.orderStatusBuyer]}-data`" :key="invoice.id" >
              {{deliveryStatus[invoice.orderStatusBuyer]}}
            </td>
            <td :key="invoice.id" ><AssignorData :id="invoice.id" /></td>
          </tr>
        </tbody>
      </table>
      <h1 class="" v-if="loading">Carregando</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import { mapState } from 'vuex';
import { deliveryStatus, colorStatus } from '@/utils/deliveryStatus';
import AssignorData from './AssignorData.vue';

export default defineComponent({
  name: 'InvoiceList',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      moment,
      deliveryStatus,
      colorStatus,
    };
  },
  computed: mapState(['invoices']),
  methods: {
    toBRL(value: string) {
      return (+value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  },
  components: { AssignorData },
});
</script>

<style scoped>
.title {
  color: #021B51;
  font-size: 1.5rem;
  font-weight: 700;
}

.description {
  color: #727D94;
  font-size: 0.875rem;
  font-weight: 400;
}

table {
  border-collapse: separate;
  border-spacing: 0 1rem;
  text-align: center;
  width: 100%;
}

th {
  color: #A1A8B8;
  font-size: 0.75rem;
  font-weight: 700;
  padding-bottom: 1rem;
}

td {
  color: #4D5566;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem 0;
}

.box-style {
  box-shadow: 0.08px 0.08px 0.08px 1px #DFE2EB;
  border-radius: 0.5rem;
}

.green-data {
  color: #00AD8C;
}

.yellow-data {
  color: #FF7E01;
}

.red-data {
  color: #DD0000;
}
</style>
