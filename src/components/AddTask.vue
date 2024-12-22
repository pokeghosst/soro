<script setup lang="ts">
import { inject } from 'vue'

import { db } from '@/lib/db'

import type { TopTaskInjector } from '@/lib/types'

import { Plus } from 'lucide-vue-next'

const props = defineProps<{ newTask: string }>()
const { updateTopTask } = inject<TopTaskInjector>('topTask')
const emit = defineEmits(['taskAdded'])

function pushTask() {
  if (!props.newTask) return
  
  db.tasks.add({ content: props.newTask })
  updateTopTask({ id: 1, content: props.newTask })
  emit('taskAdded')
}
</script>

<template>
  <button @click="pushTask">
    <Plus stroke-width="2.2" />
  </button>
</template>

<style scoped>

</style>
