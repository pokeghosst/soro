/*
soro -- Super-focused monotasking task stack.
Copyright (C) 2025 Pokeghost.

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
*/

import { ref } from 'vue'

import { db } from '@/lib/db'

import type { Task } from '@/lib/types'

const topTask = ref<Task | undefined>()
const isInitialized = ref(false)

async function loadTop() {
  try {
    topTask.value = await db.tasks.toCollection().last()
  } catch (e) {
    console.error(e)
    throw e
  }
}

async function push(content: string) {
  try {
    const id = await db.tasks.add({ content })

    topTask.value = { id, content }
  } catch (e) {
    console.error(e)
    throw e
  }
}

async function pop() {
  try {
    const tasks = await db.tasks.orderBy('id').reverse().limit(2).toArray()

    if (tasks.length > 0) {
      await db.tasks.delete(tasks[0]!.id)

      topTask.value = tasks.length > 1 ? tasks[1] : undefined
    }
  } catch (e) {
    console.error(e)
    throw e
  }
}

export function useTaskStack() {
  if (!isInitialized.value) {
    loadTop()
  }

  return { topTask, push, pop }
}
