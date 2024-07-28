import { defineStore } from 'pinia'
import { ref } from 'vue'

type Cells = string[]
type Mark = 'X' | 'O'

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const useGameStore = defineStore('game', () => {
  const cells = ref<Cells>(['', '', '', '', '', '', '', '', ''])

  const mark = ref<Mark>('X')

  const isGameFinished = ref(false)

  function checkGameStatus() {
    for (let i = 0; i < cells.value.length - 1; i++) {
      const winCondition = winningConditions[i]

      const first = cells.value[winCondition[0]]
      const second = cells.value[winCondition[1]]
      const third = cells.value[winCondition[2]]

      if (first === '' || second === '' || third === '') {
        continue
      }

      if (first === second && second === third) {
        isGameFinished.value = true
      }
    }
  }

  function fillCell(itemIdx: number) {
    cells.value[itemIdx] = mark.value

    checkGameStatus()

    if (mark.value === 'X' && !isGameFinished.value) {
      mark.value = 'O'
    } else if (mark.value === 'O' && !isGameFinished.value) {
      mark.value = 'X'
    }
  }

  function resetGame() {
    for (let i = 0; i < cells.value.length; i++) {
      cells.value[i] = ''
    }
    mark.value = 'X'
    isGameFinished.value = false
  }

  return {
    cells,
    mark,
    isGameFinished,
    fillCell,
    resetGame
  }
})
