import { getDemoInstructions, getRealInstructions, getCode } from './utils'

module day2 {

  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  console.log('demo', getCode(keypad, getDemoInstructions(), [1, 1])) //1985
  console.log('4 realz', getCode(keypad, getRealInstructions(), [1, 1])) //56855
}