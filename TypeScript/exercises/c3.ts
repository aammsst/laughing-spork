// Is it a prime number?
// Write a program to verify if a number is prime or not
// Then, print the prime numbers between 1 and 100

function isPrime(num: number): boolean{

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; ++i) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i <= 100; ++i) {
    if (isPrime(i)) {
        console.log(i);
    }
}
