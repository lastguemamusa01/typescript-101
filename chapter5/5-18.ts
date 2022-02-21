interface Person518 {
    name: string;
    age: number;
}

const persons: Person518[] = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 33 },
];

function filterBy<T, P extends keyof T>(
    property: P,
    value: T[P],
    array: T[]) {

    return array.filter(item => item[property] === value);     
}

console.log(filterBy('name', 'John', persons));

// console.log(filterBy('lastName', 'John', persons));  // error

// console.log(filterBy('age', 'twenty', persons));  // error