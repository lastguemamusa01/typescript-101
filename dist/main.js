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
var p = new Person();
p.firstName = "min ku";
p.lastName = "Smith";
p.age = 25;
console.log(getFinalPrice(100, 10));
