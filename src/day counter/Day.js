const abc = (years, month, day) => {

    let daytotal = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (i = 1; i < month; i++) {
        if (i % 2 === 0) {
            if (i === 2) {
                daytotal.push(28)
            }
            else {
                daytotal.push(30)
            }
        }
        else {
            daytotal.push(31)
        }
    }
    let monthToDay = daytotal.reduce(reducer)

    return total = (years * 365) + monthToDay + day;
}

total = abc(1, 9, 1);
console.log("total", total);