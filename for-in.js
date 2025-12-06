const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(object) {
    let result = {};

    for (const key in object) {
        const person = object[key];
        result[key] = person.died - person.born;
    }

    return result;
}

console.log(ages(persons));