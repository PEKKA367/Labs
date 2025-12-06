function sum () {    
    let totalSum = 0;
    let i = 0;

    while (i < arguments.length) {
        totalSum += arguments[i++];
    }

    return totalSum;

}

console.log(sum(1, 2, 3));