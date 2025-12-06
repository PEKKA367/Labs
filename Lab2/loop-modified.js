function rangeOdd (start, end) {
    const array = [];
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 1) {
            array.push(i);
        }
    }
    return array;
}

console.log(rangeOdd(15, 30));