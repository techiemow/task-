// Immediately Invoked Function Expression (IIFE)
(() => {
    let prime = []; // Initialize an empty array to store prime numbers

    // Function to check if a number is prime and push it into the prime array if it's prime
    const checkPrimeAndPush = (num) => {
        if (num <= 1) return false; // Prime numbers are greater than 1
        if (num <= 3) return true;  // 2 and 3 are prime

        // Check divisibility by all numbers from 2 to sqrt(num)
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // If divisible, not prime
        }

        return true; // If not divisible, prime
    };

    // Array of numbers
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Iterate through the array and push prime numbers into the prime array
    numbers.forEach(num => {
        if (checkPrimeAndPush(num)) {
            prime.push(num);
        }
    });

    console.log("Prime numbers in the array:", prime);
})();
