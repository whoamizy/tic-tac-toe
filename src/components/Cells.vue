<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

import { useGameStore } from '@/stores/game'
import Cell from './Cell.vue'
import { storeToRefs } from 'pinia'

const game = useGameStore()
const { cells } = storeToRefs(game)
</script>

<template>
  <div class="flex flex-col">
    <div class="flex" v-for="(parent, parentIdx) in cells" :key="uuidv4() + parentIdx">
      <Cell
        v-for="(child, childIdx) in parent"
        :key="uuidv4() + childIdx"
        :value="child"
        @fill-cell="game.fillCell(parentIdx, childIdx)"
      />
    </div>
  </div>
</template>
