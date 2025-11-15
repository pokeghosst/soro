<script setup lang="ts">
import { ref } from 'vue'

import AddTask from '@/components/AddTask.vue'

const props = defineProps({ slideUp: Boolean })

const task = ref('')

function clearTask() {
  task.value = ''
}
</script>

<template>
  <div class="new-task" :class="slideUp ? 'slide-up' : 'grow'">
    <input placeholder="What will you achieve?" v-model="task" />
    <AddTask :new-task="task" @task-added="clearTask" />
  </div>
</template>

<style scoped>
.new-task {
  position: relative;
  overflow: clip;
  box-shadow: var(--color-shadow) 5px 7px;
  border-radius: 12px;
}

.grow {
  width: 100%;
  animation: grow 1s ease-in-out forwards;
}

.slide-up {
  width: 90%;
  margin: 0 auto;

  &.new-task,
  input,
  button {
    border-radius: 12px 12px 0 0;
    border-bottom: none;
  }
}

input {
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-card-border);
  color: var(--color-text);
  border-radius: 12px;
  height: 48px;
  width: 100%;
  display: block;
  margin: 0 auto;
  font-family: "Sour Gummy", sans-serif;
  font-size: 1.4rem;
  padding: 0 20px;
}

button {
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  width: 48px;
  cursor: pointer;
  background-color: var(--color-card-bg);
  border-radius: 0 12px 12px 0;
  border: 3px solid var(--color-card-border);
  box-shadow: var(--color-shadow) 5px 7px;
  color: var(--color-text);
}

@keyframes grow {
  from {
    width: 48px;
  }
  to {
    width: 100%;
  }
}
</style>
