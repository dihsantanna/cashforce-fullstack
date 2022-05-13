<template>
  <button class="assignor-data-container"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssignorData',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>
