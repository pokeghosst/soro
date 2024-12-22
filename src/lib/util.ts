import { db } from '@/lib/db'

export function addTask() {
  const task = prompt("Enter the task to add")
  if (task) db.tasks.add({content: task})
}
