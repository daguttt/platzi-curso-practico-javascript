const results = document.getElementsByClassName("card__result");
const operation = document.getElementById("statistical-operation");
const calculateButton = document.getElementById("calculate-button");
const NUMBERS = document.getElementById("numbers");
const numbers = [1, 1, 2, 3, 2, 3, 3, 4, 5, 4, 4, 3, 4, 2];
function getMedia(numbers) {
    let sum = numbers.reduce((acc, cur) => {
        return cur + acc;
    }, 0);
    return sum / numbers.length;
}
function getMedian(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    if (numbers.length % 2 == 0) {
        let smallestIndex = numbers.length / 2 - 1;
        let biggestIndex = numbers.length / 2;
        return (numbers[smallestIndex] + numbers[biggestIndex]) / 2;
    }
    let centerIndex = Math.floor(numbers.length / 2);
    return numbers[centerIndex];
}
function getNumbersInventory(numbers) {
    numbers.sort((a, b) => a - b);
    const numbersInventory = {};
    for (let number of numbers) {
        numbersInventory[number] >= 1
            ? numbersInventory[number]++
            : (numbersInventory[number] = 1);
    }
    return numbersInventory;
}
function getMode(numbers) {
    const numbersInventory = getNumbersInventory(numbers);
    const pairs = Object.entries(numbersInventory);
    const [mode, reps] = pairs.reduce((acc, currentValue, i) => {
        if (!acc[1]) return (acc = [[pairs[i][0]], pairs[i][1]]);
        if (acc[1] < pairs[i][1]) return (acc = [[pairs[i][0]], pairs[i][1]]);
        if (
            acc[1] === pairs[i][1] &&
            acc[0].every((item) => item !== pairs[i][0])
        ) {
            acc[0].push(pairs[i][0]);
        }
        return acc;
    }, []);
    return { reps, mode };
}
function clearInputNumbers(numbersString) {
    let numbersClear = numbersString.replace(/\W/g, "s");
    let arrayNumbers = numbersClear.split("s").reduce((acc, cur) => {
        if (cur) acc.push(Number(cur));
        return acc;
    }, []);
    return arrayNumbers;
}
calculateButton.addEventListener("click", () => {
    let operationValue = operation.value,
        numbers = clearInputNumbers(NUMBERS.value),
        result;

    if (operationValue == "media") {
        result = getMedia(numbers);
        results[0].innerText = `La media de los números ingresados es ${result}.`;
    }
    if (operationValue == "mediana") {
        result = getMedian(numbers);
        results[0].innerText = `La mediana de los números ingresados es ${result}.`;
    }
    if (operationValue == "moda") {
        result = getMode(numbers);
        results[0].innerText = `La moda es ${result.mode} con ${result.reps} ${
            result.reps === 1 ? "repetición" : "repeticiones"
        }.`;
    }
});
