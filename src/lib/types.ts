import type { Ref } from 'vue'

interface Task {
  id: number
  content: string
}

interface TopTaskInjector {
  topTask: Ref<Task>
  updateTopTask: (value: Task | undefined) => void
}

export type { Task, TopTaskInjector }
