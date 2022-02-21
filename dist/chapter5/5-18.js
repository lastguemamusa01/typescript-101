var persons = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 33 },
];
function filterBy(property, value, array) {
    return array.filter(function (item) { return item[property] === value; });
}
console.log(filterBy('name', 'John', persons));
// console.log(filterBy('lastName', 'John', persons));  // error
// console.log(filterBy('age', 'twenty', persons));  // error
