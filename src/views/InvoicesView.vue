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
      <div class="head p-2 border-start border-bottom rounded-1 border-1"></div>
      <main class="border-start border-top rounded-1 border-1">tabela</main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InvoicesView',
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
