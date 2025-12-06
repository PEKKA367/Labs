function generateKey(length, characters) {
    let word = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        const randomLetter = characters[randomIndex];

        word += randomLetter;
    }

    return word;
}

const example = generateKey(10, 'reallylargeword');
console.log(example);

