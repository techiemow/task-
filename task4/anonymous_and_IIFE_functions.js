
let isPrime = function (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // 
  }

  return true; 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13];
let prime = [];
for (let index = 0; index < numbers.length; index++) {
  if (isPrime(numbers[index])) {
      prime.push(numbers[index])
  }
}
console.log("Prime numbers in the array:", prime);
