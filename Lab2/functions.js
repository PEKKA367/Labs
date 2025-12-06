function average (number1, number2) {
    return (number1 + number2) / 2;
}

function square (number) {
    return number * number;
}

function cube (number) {
    return number * number * number;
}

function calculate (start, end) {
    const results = [];

    for (let i = start; i <= end; i++) {
        const sum = average(square(i), cube(i));
        
        results.push(sum);
    }

    return results;
}

console.log(calculate(0, 9));