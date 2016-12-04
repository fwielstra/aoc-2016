const demoInstructions = `
  ULL
  RRDDD
  LURDL
  UUUUD
`

const realInstructions = `
  UDRLRRRUULUUDULRULUDRDRURLLDUUDURLUUUDRRRLUUDRUUDDDRRRLRURLLLDDDRDDRUDDULUULDDUDRUUUDLRLLRLDUDUUUUDLDULLLDRLRLRULDDDDDLULURUDURDDLLRDLUDRRULDURDDLUDLLRRUDRUDDDLLURULRDDDRDRRLLUUDDLLLLRLRUULRDRURRRLLLLDULDDLRRRRUDRDULLLDDRRRDLRLRRRLDRULDUDDLDLUULRDDULRDRURRURLDULRUUDUUURDRLDDDURLDURLDUDURRLLLLRDDLDRUURURRRRDRRDLUULLURRDLLLDLDUUUDRDRULULRULUUDDULDUURRLRLRRDULDULDRUUDLLUDLLLLUDDULDLLDLLURLLLRUDRDLRUDLULDLLLUDRLRLUDLDRDURDDULDURLLRRRDUUDLRDDRUUDLUURLDRRRRRLDDUUDRURUDLLLRRULLRLDRUURRRRRLRLLUDDRLUDRRDUDUUUDRUDULRRULRDRRRDDRLUUUDRLLURURRLLDUDRUURDLRURLLRDUDUUDLLLUULLRULRLDLRDDDU
  DRRRDRUDRLDUUDLLLRLULLLUURLLRLDRLURDRDRDRLDUUULDRDDLDDDURURUDRUUURDRDURLRLUDRRRDURDRRRDULLRDRRLUUUURLRUULRRDUDDDDUURLDULUDLLLRULUDUURRDUULRRDDURLURRUDRDRLDLRLLULULURLRDLRRRUUURDDUUURDRDRUURUDLULDRDDULLLLLRLRLLUDDLULLUDDLRLRDLDULURDUDULRDDRLUDUUDUDRLLDRRLLDULLRLDURUDRLRRRDULUUUULRRLUDDDLDUUDULLUUURDRLLULRLDLLUUDLLUULUULUDLRRDDRLUUULDDRULDRLURUURDLURDDRULLLLDUDULUDURRDRLDDRRLRURLLRLLLLDURDLUULDLDDLULLLRDRRRDLLLUUDDDLDRRLUUUUUULDRULLLDUDLDLURLDUDULRRRULDLRRDRUUUUUURRDRUURLDDURDUURURULULLURLLLLUURDUDRRLRRLRLRRRRRULLDLLLRURRDULLDLLULLRDUULDUDUDULDURLRDLDRUUURLLDLLUUDURURUD
  UDUUUUURUDLLLRRRDRDRUDDRLLDRRLDRLLUURRULUULULRLLRUDDRLDRLUURDUDLURUULLLULLRRRULRLURRDDULLULULRUDDDUURDRLUDUURRRRUUULLRULLLDLURUDLDDLLRRRULDLLUURDRRRDRDURURLRUDLDLURDDRLLLUUDRUULLDLLLLUUDRRURLDDUDULUDLDURDLURUURDUUUURDLLLRUUURDUUUDLDUDDLUDDUDUDUDLDUDUUULDULUURDDLRRRULLUDRRDLUDULDURUURULLLLUDDDLURURLRLRDLRULRLULURRLLRDUDUDRULLRULRUDLURUDLLDUDLRDRLRDURURRULLDDLRLDDRLRDRRDLRDDLLLLDUURRULLRLLDDLDLURLRLLDULRURRRRDULRLRURURRULULDUURRDLURRDDLDLLLRULRLLURLRLLDDLRUDDDULDLDLRLURRULRRLULUDLDUDUDDLLUURDDDLULURRULDRRDDDUUURLLDRDURUDRUDLLDRUD
  ULRDULURRDDLULLDDLDDDRLDUURDLLDRRRDLLURDRUDDLDURUDRULRULRULULUULLLLDRLRLDRLLLLLRLRRLRLRRRDDULRRLUDLURLLRLLURDDRRDRUUUDLDLDRRRUDLRUDDRURRDUUUDUUULRLDDRDRDRULRLLDLDDLLRLUDLLLLUURLDLRUDRLRDRDRLRULRDDURRLRUDLRLRLDRUDURLRDLDULLUUULDRLRDDRDUDLLRUDDUDURRRRDLDURRUURDUULLDLRDUDDLUDDDRRRULRLULDRLDDRUURURLRRRURDURDRULLUUDURUDRDRLDLURDDDUDDURUDLRULULURRUULDRLDULRRRRDUULLRRRRLUDLRDDRLRUDLURRRDRDRLLLULLUULRDULRDLDUURRDULLRULRLRRURDDLDLLRUUDLRLDLRUUDLDDLLULDLUURRRLRDULRLRLDRLDUDURRRLLRUUDLUURRDLDDULDLULUUUUDRRULLLLLLUULDRULDLRUDDDRDRDDURUURLURRDLDDRUURULLULUUUDDLRDULDDLULDUDRU
  LRLRLRLLLRRLUULDDUUUURDULLLRURLDLDRURRRUUDDDULURDRRDURLRLUDLLULDRULLRRRDUUDDRDRULLDDULLLUURDLRLRUURRRLRDLDUDLLRLLURLRLLLDDDULUDUDRDLRRLUDDLRDDURRDRDUUULLUURURLRRDUURLRDLLUDURLRDRLURUURDRLULLUUUURRDDULDDDRULURUULLUDDDDLRURDLLDRURDUDRRLRLDLRRDDRRDDRUDRDLUDDDLUDLUDLRUDDUDRUDLLRURDLRUULRUURULUURLRDULDLDLLRDRDUDDDULRLDDDRDUDDRRRLRRLLRRRUUURRLDLLDRRDLULUUURUDLULDULLLDLULRLRDLDDDDDDDLRDRDUDLDLRLUDRRDRRDRUURDUDLDDLUDDDDDDRUURURUURLURLDULUDDLDDLRUUUULRDRLUDLDDLLLRLLDRRULULRLRDURRRLDDRDDRLU
`

const formatInstructions = instructions =>
  instructions
    .split('\n')
    .map(line => { line.replace(/\s/g, ''); return line; })
    .filter(line => !!line)

// note: assumes keypad is square and has equal length rows and cols.
const getNewPositionForDirection = (keypad, currentPosition, direction) => {
  let newPosition = currentPosition.slice(0)
  switch(direction) {
    case 'U': newPosition[0] = Math.max(currentPosition[0] - 1, 0); break
    case 'D': newPosition[0] = Math.min(currentPosition[0] + 1, keypad.length -1); break
    case 'L': newPosition[1] = Math.max(currentPosition[1] - 1, 0); break
    case 'R': newPosition[1] = Math.min(currentPosition[1] + 1, keypad[0].length -1); break
  }

  return (keypad[newPosition[0]][newPosition[1]] != 0) ? newPosition : currentPosition
}

const getUpdatedPositionForLine = (keypad, currentPosition, line) =>
  line.split('').reduce((currentPosition, direction) => getNewPositionForDirection(keypad, currentPosition, direction), currentPosition);

export const getDemoInstructions = () => formatInstructions(demoInstructions)
export const getRealInstructions = () => formatInstructions(realInstructions)

export const getCode = (keypad, data, initialPosition) => {
  let pos = initialPosition.slice(0)
  const getNumberForLine = line => {
    pos = getUpdatedPositionForLine(keypad, pos.slice(0), line)
    return keypad[pos[0]][pos[1]]
  }

  return data.map(getNumberForLine).join('')
}