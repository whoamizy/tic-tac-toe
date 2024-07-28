<script setup lang="ts">
import { computed } from 'vue'
import Button from './components/Button.vue'
import Cells from './components/Cells.vue'
import { useGameStore } from './stores/game'

const game = useGameStore()

const topText = computed(() => {
  if (!game.isGameFinished) {
    return `Player's turn: ${game.mark}`
  } else {
    return `Game over. Player ${game.mark} win!`
  }
})
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-start bg-white pt-10">
    <div class="flex grow flex-col items-center text-center">
      <h1 class="mb-10 text-5xl font-bold">Tic-Tac-Toe</h1>
      <h3 class="mb-10 text-3xl font-semibold">{{ topText }}</h3>
      <Cells />
      <Button class="mt-10" v-if="game.isGameFinished" @on-click="game.resetGame">Retry</Button>
    </div>
    <div class="py-3">Made by Whoami</div>
  </div>
</template>
