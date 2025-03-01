function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function rollDieUntilMaxReached() {
    let results = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let maxReached = false;
    let maxNumber = null;
  
    while (!maxReached) {
      let roll = rollDie();
      results[roll]++;
      if (results[roll] === 10) {
        maxReached = true;
        maxNumber = roll;
      }
    }
  
    let maxCount = -Infinity, minCount = Infinity;
    let maxNum = null, minNum = null;
  
    for (let number in results) {
      if (results[number] > maxCount) {
        maxCount = results[number];
        maxNum = number;
      }
      if (results[number] < minCount) {
        minCount = results[number];
        minNum = number;
      }
    }
  
    return {
      results: results,
      maxNumber: maxNum,
      minNumber: minNum
    };
  }
  
  let result = rollDieUntilMaxReached();
  console.log("Roll Results: ", result.results);
  console.log("Number that appeared most times (Max):", result.maxNumber);
  console.log("Number that appeared least times (Min):", result.minNumber);
  