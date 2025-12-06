function random (minimum, maximum) {
    let min, max;

    if (maximum === undefined) {
        min = 0;
        max = minimum;
    } else {
        min = minimum;
        max = maximum;
    }
    
    // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const test = random(10, 20);
console.log(test);