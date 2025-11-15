<script setup lang="ts">
import { ref } from 'vue'

import type { Task } from '@/lib/types'

import { Check, Plus } from 'lucide-vue-next'
import NewTaskInput from '@/components/NewTaskInput.vue'
import CompleteTask from '@/components/CompleteTask.vue'

const props = defineProps<{ task: Task }>()

const isFormVisible = ref(false)
</script>

<template>
  <div class="wrapper">
    <div class="form-wrapper" :class="{ 'form-visible': isFormVisible }">
      <NewTaskInput slide-up />
    </div>
    <div class="task">
      <button class="add-task" @click="isFormVisible = !isFormVisible">
        <Plus stroke-width="2.2" class="plus-icon" :class="{ 'plus-rotated': isFormVisible }" />
      </button>
      <p>
        {{ props.task.content }}
      </p>
      <CompleteTask class="complete-task"/>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  position: relative;
}

.form-wrapper {
  width: 100%;
  position: absolute;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}

.form-visible {
  transform: translateY(-46px);
}

.plus-icon {
  transition: rotate 0.3s ease-in-out;
}

.plus-rotated {
  rotate: 45deg;
}

.task {
  position: relative;
  overflow: clip;
  background-color: var(--color-card-bg);
  border: 3px solid var(--color-card-border);
  box-shadow: var(--color-shadow) 10px 14px;
  color: var(--color-text);
  padding: 24px;
  border-radius: 18px;
  font-family: "Sour Gummy", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  height: fit-content;
}

button {
  position: absolute;
  border-style: solid;
  cursor: pointer;
  background-color: var(--color-card-bg);
  color: var(--color-text);
  border-color: var(--color-card-border);

  &:active {
    background-color: var(--color-selected);
  }
}

.add-task {
  top: 0;
  left: 0;
  border-width: 0 3px 3px 0;
  border-radius: 0 0 12px 0;
}

.complete-task {
  bottom: 0;
  right: 0;
  border-width: 3px 0 0 3px;
  border-radius: 12px 0 0 0;
}

</style>
