function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); 
    }
    return numbers;
  }
  

  function findSecondLargestAndSmallestSorted(numbers) {
    numbers.sort((a, b) => a - b); 
    const secondSmallest = numbers[1];
    const secondLargest = numbers[numbers.length - 2];
  
    return { secondLargest, secondSmallest };
  }
  
  const randomNumbers = generateRandomNumbers();
  console.log("Random 3-digit numbers:", randomNumbers);
  
  const { secondLargest, secondSmallest } = findSecondLargestAndSmallestSorted(randomNumbers);
  console.log("2nd Largest:", secondLargest);
  console.log("2nd Smallest:", secondSmallest);
  