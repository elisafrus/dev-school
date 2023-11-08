let number = 59843;

let numberAsString = number.toString();
let digitsArray = numberAsString.split('');
digitsArray.sort((a, b) => b - a);
let sortedNumberAsString = digitsArray.join('');

let result = parseInt(sortedNumberAsString);

console.log(result); 
