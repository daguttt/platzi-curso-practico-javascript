const results = document.getElementsByClassName('card__result');
const operation = document.getElementById('statistical-operation');
const calculateButton = document.getElementById('calculate-button');

function getMedia(numbers) {
    let sum = 0;
    for (number of numbers) {
        sum += number
    }
    return sum / numbers.length
}
function getMedian(numbers) {
    // 1, 2, 3, 4, 5, 6, 7, 8
    numbers = numbers.sort((a, b) => a - b)	
    if (numbers.length % 2 == 0) {
        let smallestIndex = (numbers.length / 2) - 1
        let biggestIndex = numbers.length / 2
        return (numbers[smallestIndex] + numbers[biggestIndex]) / 2;
    }
    let centerIndex = Math.floor(numbers.length / 2)
    return numbers[centerIndex]
}

function getMode(numbers) {
    return 0
}
calculateButton.addEventListener('click', () => {
    let operationValue = operation.value;
    if (operationValue == 'media') {

    }
})
