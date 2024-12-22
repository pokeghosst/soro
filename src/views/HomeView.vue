<script setup lang="ts">
import { provide, type Ref, ref } from 'vue'

import { db } from '@/lib/db'

import type { Task } from '@/lib/types'

import TaskCard from '@/components/TaskCard.vue'
import AddFirstTaskButton from '@/components/AddFirstTaskButton.vue'

const topTask: Ref<Task | undefined> = ref(undefined)

function updateTopTask(task: Task) {
  topTask.value = task
}

provide('topTask', {
  topTask,
  updateTopTask
})

db.tasks.toCollection().last()
  .then(task => {
    topTask.value = task
  })
</script>

<template>
  <main>
    <div class="container">
      <TaskCard v-if="topTask" :task="topTask" />
      <AddFirstTaskButton v-else />
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 90%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
