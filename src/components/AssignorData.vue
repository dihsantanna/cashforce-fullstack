<template>
  <div class="assignor-data-container">
    <button
      type="button"
      class="btn-style btn btn-light border border-2 rounded-pill"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Dados do cedente
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dados do Cedente</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
            </button>
          </div>
          <div class="modal-body">
            <div v-if="getProvider()">
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-1 me-auto">
                    <div class="fw-bold text-start">Nome :</div>
                    {{provider.name}}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-1 me-auto">
                    <div class="fw-bold text-start">Nome Comercial :</div>
                    {{provider.tradingName}}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-1 me-auto">
                    <div class="fw-bold text-start">CNPJ :</div>
                    {{provider.cnpj.number}}
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-cl btn btn-dark border border-2 rounded-pill"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Invoice } from '@/types/Invoice.interface';
import { Provider } from '@/types/Provider.interface';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'AssignorData',
  data() {
    return {
      provider: {} as Provider,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: mapState(['invoices']),
  methods: {
    getProvider() {
      const data = this.invoices
        .find((invoice: Invoice) => (invoice.id === this.id));
      if (!data) return data;
      this.provider = data.provider;
      return true;
    },
  },
});
</script>

<style scoped>
.btn-style {
  color: #727D94;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.5rem 1.8rem;
  opacity: 0.85;
}

.btn-style:hover {
  opacity: 1;
}

ol {
  list-style: none;
}

.btn-cl {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  opacity: 0.9;
}

.btn-cl:hover {
  opacity: 1;
}
</style>
