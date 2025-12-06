function createUser(name, city) {
    const user = {
        name: name,
        city: city,
    };
    
    return user;
}

const markusUser = createUser('Markus Aurelius', 'Roma');

console.log(markusUser);