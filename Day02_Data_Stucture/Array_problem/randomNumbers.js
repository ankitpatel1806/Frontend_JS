function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); 
    }
    return numbers;
  }
  
  function findSecondLargestAndSmallest(numbers) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
  
    for (let num of numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
  
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num > smallest) {
        secondSmallest = num;
      }
    }
  
    return { secondLargest, secondSmallest };
  }
  
  const randomNumbers = generateRandomNumbers();
  console.log("Random 3-digit numbers:", randomNumbers);
  
  const { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
  console.log("2nd Largest:", secondLargest);
  console.log("2nd Smallest:", secondSmallest);
  