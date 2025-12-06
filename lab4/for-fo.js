function sum () {    
    let totalSum = 0;

    for (const element of arguments) {
        totalSum += element
    }

    return totalSum;

}

console.log(sum(1, 2, 3));