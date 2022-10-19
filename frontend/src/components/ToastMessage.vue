<template>
  <div
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  class="toast show fade position-absolute top-0 end-0 m-3 text-bg-light w-50">
    <div class="toast-header text-bg-dark">
      <strong class="me-auto text-white">{{title}}</strong>
      <button
      type="button"
      class="btn-close btn-close-white"
      data-bs-dismiss="toast"
      aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToastMessage',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
