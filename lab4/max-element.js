function maxElementArray(array) {
    let maxNumber = -Infinity;

    array.forEach((innerArray) => {
        innerArray.forEach((element) => {
            if (element > maxNumber) {
                maxNumber = element;
            }
        })
    });

    return maxNumber;
}

const m = maxElementArray([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 7, 145, 25, 506, 405]]);
console.log(m);