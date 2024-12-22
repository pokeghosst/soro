import Dexie, { type EntityTable } from 'dexie'

import type { Task } from '@/lib/types'

const db = new Dexie('SoroTasks') as Dexie & {
  tasks: EntityTable<Task, 'id'>
}

db.version(1).stores({
  tasks: '++id, content',
})

export { db }
