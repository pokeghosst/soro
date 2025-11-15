<script setup lang="ts">

import { useTaskStack } from '@/composables/useTaskStack'

import AddFirstTaskButton from '@/components/AddFirstTaskButton.vue'
import TaskCard from '@/components/TaskCard.vue'

const {topTask} = useTaskStack()

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
