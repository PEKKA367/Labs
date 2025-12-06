// null is considered an object in JavaScript
const array = [3, true, undefined, 'something', false, 42, null];

const typeCounts = {number: 0, boolean: 0, undefined: 0, string: 0, object: 0};

for (const value of array) {
    // Determine the type of the current value
    const currentType = typeof value;
    typeCounts[currentType]++;
}

console.dir(typeCounts);