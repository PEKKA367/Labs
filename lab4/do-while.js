function sum () {
    let totalSum = 0;
    let i = 0;

    do {
        totalSum += arguments[i++];
    } while (i != arguments.length);

    return totalSum;
}

console.log(sum(100, 2124, 32131, 131, 41, 314));