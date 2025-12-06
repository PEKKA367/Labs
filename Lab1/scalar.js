const a = 1;
const b = inc(a);

function inc(n) {
    return n + 1;
}

// Display details of all properties of the transferred object
console.dir({ a, b });