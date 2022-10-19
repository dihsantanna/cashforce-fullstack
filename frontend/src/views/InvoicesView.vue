<template>
  <div class="home d-flex">
    <aside class="d-flex w-25 flex-column justify-content-start">
      <img class="logo" alt="logo" src="@/assets/logo.png" />
      <button class="d-flex align-items-center btn btn-lg invoices-btn p-3 mt-4" type="button">
        <img class="me-3" alt="invoices" src="@/assets/hands.svg" />
        Notas fiscais
      </button>
    </aside>
    <div class="main-content d-flex w-100 flex-column align-items-stretch">
      <div class="head p-2 border-start border-bottom rounded-1 border-1 position-relative">
        <ToastMessage :title="'Atenção!!'">
          Por conta do deploy do backend ser feito com
          servidores gratuitos, o primeiro carregamento pode demorar
          de 60 a 120 segundos. Se após esse tempo não houver
          resposta, reinicie a pagina, caso não funcione, por favor
          envie um e-mail para
          <a
          class="text-danger"
          href="mailto:diogosantanna08@gmail.com"
          target="_blank">
            diogosantanna08@gmail.com
          </a>.
          <br />
          Obrigado pela compreensão! 😉
        </ToastMessage>
      </div>
      <main class="p-5 border-start border-top rounded-1 border-1">
        <InvoiceList :loading="loading" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import InvoiceList from '@/components/InvoiceList.vue';
import ToastMessage from '@/components/ToastMessage.vue';
import { requestData } from '@/services/api';
import store from '@/store';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'InvoicesView',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = true;
    const id = 1;
    requestData(`/invoices?userId=${id}`).then((res) => {
      store.commit('setInvoices', res);
    }).catch((error) => console.error(error))
      .finally(() => { this.loading = false; });
  },
  computed: mapState(['invoices']),
  components: { InvoiceList, ToastMessage },
});
</script>

<style scoped>

.head {
  height: 3.7rem;
  margin-bottom: 0.25rem;
}
.home {
  height: 100vh;
  width: 100vw;
}

.logo {
  margin: 1rem 1.5rem 0;
  width: 11rem;
}
.invoices-btn {
  border-left: 0.25rem solid #00AD8C;
  border-start-start-radius: 0.25rem;
  color: #00AD8C;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  margin: 0;
  text-align: start;
  width: 100%;
}

.main-content {
  border-radius: 0.93rem 0px 0px 0.93rem;
}

main {
  height: calc(90vh - 0.25rem);
}
</style>
