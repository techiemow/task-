// Function to check if a number is prime
let prime =[];
((num)=> {
  if (num <= 1) return false; // Prime numbers are greater than 1
  if (num <= 3) return true;  // 2 and 3 are prime

  // Check divisibility by all numbers from 2 to sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If divisible, not prime
  }

  return true; 
  if ((true)) {
    prime.push(numbers[index]);
}// If not divisible, prime
});const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Iterate through the array and push prime numbers into the prime array

console.log("Prime numbers in the array:", prime);
