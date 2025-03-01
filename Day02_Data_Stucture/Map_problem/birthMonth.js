function generateBirthMonths() {
    let birthMonths = {};
  
    for (let i = 0; i < 50; i++) {
      let month = Math.floor(Math.random() * 12) + 1;
      if (!birthMonths[month]) {
        birthMonths[month] = [];
      }
      birthMonths[month].push(`Individual ${i + 1}`);
    }
  
    return birthMonths;
  }
  
  function printBirthMonthGroups() {
    let birthMonths = generateBirthMonths();
  
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonths) {
      console.log(`Month ${month}:`, birthMonths[month].join(", "));
    }
  }
  
  printBirthMonthGroups();
  