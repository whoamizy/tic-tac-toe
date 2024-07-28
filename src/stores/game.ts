import { defineStore } from 'pinia'
import { ref } from 'vue'

type Cells = string[][]
type Mark = 'X' | 'O'

export const useGameStore = defineStore('game', () => {
  const cells = ref<Cells>([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  const mark = ref<Mark>('X')

  function fillCell(parentIdx: number, childIdx: number) {
    cells.value[parentIdx][childIdx] = mark.value

    if (mark.value === 'X') {
      mark.value = 'O'
    } else {
      mark.value = 'X'
    }
  }

  return {
    cells,
    mark,
    fillCell
  }
})
