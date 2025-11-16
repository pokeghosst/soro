<!--
soro -- Super-focused monotasking task stack.
Copyright (C) 2024-2025 Pokeghost.

soro is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

soro is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
-->

<script setup lang="ts">
import { ref } from 'vue'

import { useTaskStack } from '@/composables/useTaskStack'
import { useToast } from '@/composables/useToast'

import { Plus } from 'lucide-vue-next'

const { slideUp } = defineProps({ slideUp: Boolean })

const task = ref('')
const { push } = useTaskStack()
const { showToast } = useToast()

function clearTask() {
  task.value = ''
}

function validateTask() {
  return task.value.trim().length > 0
}

async function addTask() {
  if (!validateTask()) {
    return
  }

  try {
    await push(task.value.trim())
    clearTask()
  } catch {
    showToast('Error when adding task!', 'error')
  }
}
</script>

<template>
  <div class="new-task" :class="slideUp ? 'slide-up' : 'grow'">
    <input placeholder="What will you achieve?" v-model="task" />
    <button @click="addTask()" :disabled="!validateTask()">
      <Plus stroke-width="2.2" />
    </button>
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
  font-family: 'Sour Gummy', sans-serif;
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
