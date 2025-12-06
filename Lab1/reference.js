function inc(num) {
    num.n = num.n + 1;
    return num;
}

const number = { n: 1 };

inc(number);

// Display details of all properties of the transferred object
console.dir(number);