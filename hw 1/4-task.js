let number = 4;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}

else if (number <= 3) {
    isPrime = true;
} 

else {
    for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;

        break;
    } 
  }
}

console.log(isPrime);
