function findMinMax() {
    let values = [];
    for (let i = 0; i < 5; i++) {
        values.push(Math.floor(Math.random() * 900) + 100);
    }
    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);
    
    console.log(`Values: ${values}`);
    console.log(`Minimum Value: ${minValue}`);
    console.log(`Maximum Value: ${maxValue}`);
}

findMinMax();
