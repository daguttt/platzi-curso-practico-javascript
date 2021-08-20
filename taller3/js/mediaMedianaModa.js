const results = document.getElementsByClassName('card__result');
const operation = document.getElementById('statistical-operation');
const calculateButton = document.getElementById('calculate-button');

const numbers = [1, 1, 2, 3, 2, 3, 3, 4, 5, 4, 4, 3, 4, 2]
function getMedia(numbers) {
  let sum = 0;
  for (number of numbers) {
    sum += number
  }
  return sum / numbers.length
}
function getMedian(numbers) {
  numbers = numbers.sort((a, b) => a - b)
  if (numbers.length % 2 == 0) {
    let smallestIndex = (numbers.length / 2) - 1
    let biggestIndex = numbers.length / 2
    return (numbers[smallestIndex] + numbers[biggestIndex]) / 2;
  }
  let centerIndex = Math.floor(numbers.length / 2)
  return numbers[centerIndex]
}
function getNumbersInventory(numbers) {
  numbers.sort((a, b) => a - b)
  const numbersInventory = {}
  for (let number of numbers) {
    numbersInventory[number] >= 1 ? numbersInventory[number]++ : numbersInventory[number] = 1;
  }
  return numbersInventory
}
function getMode(numbers) {
  const numbersInventory = getNumbersInventory(numbers);
  const pairs = Object.entries(numbersInventory);
  const [mode, reps] = pairs.reduce((acc, currentValue, i) => {
    if (!acc[1]) return acc = [[pairs[i][0]], pairs[i][1]]
    if (acc[1] === pairs[i][1] && acc[0].every(item => item !== pairs[i][0])) acc[0].push(pairs[i][0])
    if (acc[1] < pairs[i][1]) return acc = [[pairs[i][0]], pairs[i][1]]
    return acc
  }, [])
  return {reps, mode}
}

// calculateButton.addEventListener('click', () => {
  //     let operationValue = operation.value;
  //     if (operationValue == 'media') {
    
//     }
// })
