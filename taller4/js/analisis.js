const sortedSalaries = colombia.map((person) => person.salary).sort((a, b) => a - b);
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
function getTop10v1(salaries) {
    let times = salaries.length * 10 / 100;
    let top10 = []
    for (let i = 0; i < times; i++) {
        top10.push(salaries.pop())
    }
    return top10.sort((a, b) => a - b)
}

function getTop10v2(salaries) {
    let top10StartIndex = Math.round(salaries.length * 90 / 100);
    let top10Count = salaries.length - top10StartIndex;
    return salaries.splice(top10StartIndex, top10Count);
}

