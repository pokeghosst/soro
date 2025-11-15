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
import { ref } from 'vue';

import NewTaskInput from '@/components/NewTaskInput.vue';
import { Plus } from 'lucide-vue-next';

const isActivated = ref(false)
</script>

<template>
  <NewTaskInput v-if="isActivated"/>
  <button @click="isActivated = true" v-else>
    <Plus stroke-width="2.5"/>
  </button>
</template>

<style scoped>
  button {
    cursor: pointer;
    background-color: var(--color-card-bg);
    border: 3px solid var(--color-card-border);
    box-shadow: var(--color-shadow) 5px 7px;
    color: var(--color-text);
    border-radius: 12px;
    height: 48px;
    width: 48px;

    &:active {
      transform: translate(5px, 7px);
      box-shadow: none;
    }
  }
</style>
