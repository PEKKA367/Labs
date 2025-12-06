const phoneBook = [
    { name: "Alice", phone: "+380445554433" },
    { name: "Bob", phone: "+380667778899" },
    { name: "Charlie", phone: "+380449998877" },
]

function findPhoneByName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }

    return null;
}

console.log(findPhoneByName("Bob"));
console.log(findPhoneByName("Eve"));





// Creating a hash (object) to represent a phone book
const phoneBookHash = {
    "Alice": "+380445554433",
    "Bob": "+380667778899",
    "Charlie": "+380449998877",
}

function findPhoneByNameHash(name) {
    const phoneNumber = phoneBookHash[name];

    if (phoneNumber) {
        return phoneNumber;
    }
    return null;
}

console.log(findPhoneByNameHash("Bob"));
console.log(findPhoneByNameHash("Steve"));