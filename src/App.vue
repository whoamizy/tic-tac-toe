<script setup lang="ts">
import Cells from './components/Cells.vue'
import { useGameStore } from './stores/game'

const game = useGameStore()
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-start bg-white pt-10">
    <div class="flex grow flex-col items-center">
      <h1 class="mb-10 text-5xl font-bold">Tic-Tac-Toe</h1>
      <h3 class="mb-10 text-3xl font-semibold">Player's turn: {{ game.mark }}</h3>
      <Cells />
    </div>
    <div class="py-3">Made by Whoami</div>
  </div>
</template>
