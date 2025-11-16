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

import { readonly, ref } from 'vue'

import type { Toast } from '@/lib/types'

const toasts = ref<Toast[]>([])
const timeouts = new Map<string, ReturnType<typeof setTimeout>>()

export function useToast() {
  function showToast(message: string, type: Toast['type'] = 'info', duration = 3000) {
    if (!message.trim()) return

    const id = crypto.randomUUID()
    const toast: Toast = { id, message, type }

    toasts.value = [toast, ...toasts.value]

    const timeout = setTimeout(() => {
      dismissToast(id)
    }, duration)

    timeouts.set(id, timeout)

    return id
  }

  function dismissToast(id: Toast['id']) {
    const timeout = timeouts.get(id)

    if (timeout) {
      clearTimeout(timeout)
      timeouts.delete(id)
    }

    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  return {
    toasts: readonly(toasts),
    showToast,
    dismissToast,
  }
}
