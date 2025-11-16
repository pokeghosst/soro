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
import { useTaskStack } from '@/composables/useTaskStack'
import { useToast } from '@/composables/useToast'

import { Check } from 'lucide-vue-next'

const { pop } = useTaskStack()
const { showToast } = useToast()

function popTask() {
  try {
    pop()
  } catch {
    showToast('Error when completing task!', 'error')
  }
}
</script>

<template>
  <button @click="popTask()">
    <Check stroke-width="2.2" />
  </button>
</template>

<style scoped></style>
