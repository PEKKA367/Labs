function sum () {
    const array = [...arguments];

    // Or you can use this also
    // const array = Array.from(arguments);

    const totalSum = array.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0)

    return totalSum;
}

console.log(sum(1, 2, 3));