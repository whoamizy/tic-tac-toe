<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import Cell from './Cell.vue'
import { storeToRefs } from 'pinia'

const game = useGameStore()
const { cells, isGameFinished } = storeToRefs(game)
</script>

<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-3 grid-rows-3">
      <Cell
        v-for="(item, itemIdx) in cells"
        :key="itemIdx"
        :value="item"
        :disabled="!!item || isGameFinished"
        @fill-cell="game.fillCell(itemIdx)"
      />
    </div>
  </div>
</template>
