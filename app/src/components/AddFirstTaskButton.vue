<script setup lang="ts">
import { ref } from 'vue'

import { Plus } from 'lucide-vue-next';

import NewTaskInput from '@/components/NewTaskInput.vue'

const isActivated = ref(false)
</script>

<template>
  <NewTaskInput v-if="isActivated"/>
  <button @click="isActivated = true" v-else>
    <Plus stroke-width="2.5"/>
  </button>
</template>

<style scoped>
  button {
    cursor: pointer;
    background-color: var(--color-card-bg);
    border: 3px solid var(--color-card-border);
    box-shadow: var(--color-shadow) 5px 7px;
    color: var(--color-text);
    border-radius: 12px;
    height: 48px;
    width: 48px;

    &:active {
      transform: translate(5px, 7px);
      box-shadow: none;
    }
  }
</style>
