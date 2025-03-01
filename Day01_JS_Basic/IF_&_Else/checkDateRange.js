function checkDate(day, month) {
    if ((month > 3 || (month === 3 && day >= 20)) && (month < 6 || (month === 6 && day <= 20))) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkDate(15, 4); 
checkDate(25, 6);
