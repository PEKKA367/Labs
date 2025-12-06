function ipToNumberOptimized(ipAddress = '127.0.0.1') {
    const newArray = ipAddress.split('.');
    const byte = newArray.map(str => parseInt(currentByteStr, 10));

    function calculation(accumulator, currentByteStr, index) {
        // map(function) doesn`t change old array, it creates new array and apllies function in breakets to each element of old array
        const shifts = (3 - index) * 8;

        const shiftedByte = byte << shifts;

        return accumulator;;
    }

    newArray.reduce(calculation);
}

console.log(ipToNumberOptimized());