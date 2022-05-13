<template>
  <div class="invoice-list-container">
    <div class="head-list">
      <div class="title">
        <img alt="logo_table" src="@/assets/hands-dark.svg" />
        Notas fiscais
      </div>
      <span class="description">Visualize as notas fiscais que você tem.</span>
    </div>
    <div>
      <table v-if="!loading" class="table">
        <thead>
          <tr>
            <th scope="col">NOTA FISCAL</th>
            <th scope="col">SACADO</th>
            <th scope="col">CEDENTE</th>
            <th scope="col">EMISSÃO</th>
            <th scope="col">VALOR</th>
            <th scope="col">STATUS</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="invoice.id" v-for="invoice in invoices">
            <th :key="invoice.id" scope="row">{{invoice.nNf}}</th>
            <td :key="invoice.id" >{{invoice.buyer.name}}</td>
            <td :key="invoice.id" >{{invoice.provider.name}}</td>
            <td :key="invoice.id" >
            {{moment(invoice.emissionDate).locale('pt-br').format('DD/MM/YY')}}
            </td>
            <td :key="invoice.id" >{{toBRL(invoice.value)}}</td>
            <td :key="invoice.id" >{{deliveryStatus[invoice.orderStatusBuyer]}}</td>
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
import { DeliveryStatus } from '@/utils/DeliveryStatus';
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
      deliveryStatus: DeliveryStatus,
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

</style>
