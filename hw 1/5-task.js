let input = "9 8 4 6 3";
let numbersArray = input.split(' ').map(Number);

let maxNumber = Math.max(...numbersArray);
let minNumber = Math.min(...numbersArray);

let result = maxNumber + '-' + minNumber;

console.log(result);
