'use strict';

const testinput1 = "R2, L3"
const testinput2 = "R2, R2, R2"
const testinput3 = "R5, L5, R5, R3"

const input = "L2, L5, L5, R5, L2, L4, R1, R1, L4, R2, R1, L1, L4, R1, L4, L4, R5, R3, R1, L1, R1, L5, L1, R5, L4, R2, L5, L3, L3, R3, L3, R4, R4, L2, L5, R1, R2, L2, L1, R3, R4, L193, R3, L5, R45, L1, R4, R79, L5, L5, R5, R1, L4, R3, R3, L4, R185, L5, L3, L1, R5, L2, R1, R3, R2, L3, L4, L2, R2, L3, L2, L2, L3, L5, R3, R4, L5, R1, R2, L2, R4, R3, L4, L3, L1, R3, R2, R1, R1, L3, R4, L5, R2, R1, R3, L3, L2, L2, R2, R1, R2, R3, L3, L3, R4, L4, R4, R4, R4, L3, L1, L2, R5, R2, R2, R2, L4, L3, L4, R4, L5, L4, R2, L4, L4, R4, R1, R5, L2, L4, L5, L3, L2, L4, L4, R3, L3, L4, R1, L2, R3, L2, R1, R2, R5, L4, L2, L1, L3, R2, R3, L2, L1, L5, L2, L1, R4"

const steps = input.split(", ").map(step => ({ direction: step.substr(0, 1), distance: Number(step.substr(1, step.length)) }))

let currentPosition = {x: 0, y: 0};
let currentHeading = 'N';

const updateHeading = direction => {
  const l = direction == 'L'
  switch(currentHeading) {
    case 'N': currentHeading = l ? 'W' : 'E'; break;
    case 'E': currentHeading = l ? 'N' : 'S'; break;
    case 'S': currentHeading = l ? 'E' : 'W'; break;
    case 'W': currentHeading = l ? 'S' : 'N'; break;
  }
}

const updatePosition = distance => {
  switch(currentHeading) {
    case 'N': currentPosition.y += distance; break;
    case 'E': currentPosition.x += distance; break;
    case 'S': currentPosition.y -= distance; break;
    case 'W': currentPosition.x -= distance; break;
  }
}

const calculateDistanceTo = point => Math.abs(currentPosition.x) + Math.abs(currentPosition.y)

steps.forEach((step, index) => {
  updateHeading(step.direction);
  updatePosition(step.distance)
  console.log('step', index, 'heading', currentHeading, 'distance', step.distance, 'new position', currentPosition);
})

console.log('bunny HQ location:', currentPosition, 'distance to HQ from 0,0:', calculateDistanceTo(currentPosition))

