function findRepeatedDigits() {
    let repeatedDigits = [];
    for (let i = 0; i <= 100; i++) {
      let num = i.toString();
      if (num.length === 2 && num[0] === num[1]) {
        repeatedDigits.push(i);
      }
    }
    return repeatedDigits;
  }
  let repeatedDigits = findRepeatedDigits();
  console.log("Digits that are repeated twice between 0 and 100:", repeatedDigits);
  