var name2 = 'John Smith';
var padding;
var patient = {
    name: 'Joe Smith',
    height: 5
};
function getFinalPrice(price, discount) {
    return price - price / discount;
}
function logError(errorMessage) {
    console.error(errorMessage);
}
function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var PersonWithContructor = /** @class */ (function () {
    function PersonWithContructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    return PersonWithContructor;
}());
var block = /** @class */ (function () {
    function block(index, previousHash, timestamp, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
    return block;
}());
function savePerson(person) {
    console.log('Saving', person);
}
var personInterface = {
    firstName: "John",
    lastNmae: "Smith",
    age: 25
};
savePerson(personInterface);
var p = new Person();
p.firstName = "min ku";
p.lastName = "Smith";
p.age = 25;
var pImproved = new PersonWithContructor("aldo", "sam", 30);
console.log(getFinalPrice(100, 10));
