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
