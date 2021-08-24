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

function getWeightedAverage(elements) {
    /* elements (array of objects) */
    [sumElements, sumWeights] = elements.reduce((acc, cur) => {
        acc[0] = acc[0] ?? 0, acc[1] = acc[1] ?? 0;
        let multiply = cur.value * cur.weight;
        acc = [multiply + acc[0], cur.weight + acc[1]];
        return acc;
    }, []);
    return sumElements / sumWeights;
}
function clearInputNumbers(stringNumbers) {
    if (stringNumbers.search(/(\(\d{1,},?\s?\d{1,}\),?\s?){1,}/g) !== -1) {
        let arrayStringPairs = stringNumbers.match(/\(\d{1,},?\s{1,}?\d{1,}\)/g);
        let arrayObjects = arrayStringPairs.reduce((acc, cur) => {
            let [value, weight] = cur.replace(/\W/g, "").split("");
            value = Number(value);
            weight = Number(weight);
            acc.push({ value, weight });
            return acc;
        }, []);
        return arrayObjects;
    }
    let numbersClear = stringNumbers.replace(/\W/g, "s");
    let arrayNumbers = numbersClear.split("s").reduce((acc, cur) => {
        if (cur) acc.push(Number(cur));
        return acc;
    }, []);
    return arrayNumbers;
}
operation.addEventListener("change", () => {
    label = document.querySelector("[for=numbers]");
    if (operation.value == "media-ponderada") {
        label.innerText = `Ingresa los numberos con su ponderación entre paréntesis ( ).`;
        NUMBERS.setAttribute('placeholder', '(valor ponderacion) Ej: (1 2) (2 1)')
        results[0].innerText = '', NUMBERS.value = ''
        return
    }
    label.innerText = `Ingresa los números (separandolos por comas).`;
    NUMBERS.setAttribute('placeholder', '1, 2, 3, 4')
    results[0].innerText = '', NUMBERS.value = ''
    return
});
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
    if (operationValue == "media-ponderada") {
        result = getWeightedAverage(numbers);
        results[0].innerText = `La media ponderada de los números ingresados es ${result}.`;
    }
});
