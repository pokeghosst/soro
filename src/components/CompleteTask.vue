<script setup lang="ts">
import { inject } from 'vue'

import { db } from '@/lib/db'

import type { TopTaskInjector } from '@/lib/types'

import { Check } from 'lucide-vue-next'

const { updateTopTask } = inject<TopTaskInjector>('topTask')

async function popTask() {
  const last = await db.tasks.toCollection().last()
  const nextToLast = await db.tasks.get(last.id - 1)
  db.tasks.delete(last.id)
  updateTopTask(nextToLast)
}
</script>

<template>
  <button @click="popTask">
    <Check stroke-width="2.2" />
  </button>
</template>

<style scoped>

</style>
