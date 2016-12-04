import { getDemoInstructions, getRealInstructions, getCode } from './utils'

module day2b {

  const keypad = [
    [0, 0, 1, 0, 0],
    [0, 2, 3, 4, 0],
    [5, 6, 7, 8, 9],
    [0, 'A', 'B', 'C', 0],
    [0, 0, 'D', 0, 0]
  ]

  console.log('demo', getCode(keypad, getDemoInstructions(), [2, 0])) // 5DB3
  console.log('4 realz', getCode(keypad, getRealInstructions(), [2, 0])) // B3C27
}