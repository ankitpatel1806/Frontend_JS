function primeFactors(N) {
    for (let i = 2; i * i <= N; i++) {
      while (N % i === 0) {
        console.log(i);
        N /= i;
      }
    }
    if (N > 2) {
      console.log(N);
    }
  }
  
  const N = parseInt(prompt("Enter a number to find its prime factors: "), 10);
  
  if (isNaN(N) || N <= 1) {
    console.log("Please enter a valid number greater than 1.");
  } else {
    console.log(`Prime factors of ${N}:`);
    primeFactors(N);
  }
  