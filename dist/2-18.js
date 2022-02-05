/*

 In a nominal type system, if you declare a variable of type Person, you can assign to it only an object of type
 Person or its descendant. like java

This code doesn’t report any errors because TypeScript uses a structural type system, and since both the Person and Customer classes have the same structure, it’s OK to assign an instance of one class to a variable of another.

Our classes didn’t define any methods, but if both of them defined a method with the same signature (name, arguments, and return type), they would again be compatible.

even this is ok

class person {
    name: string;
    age: number;
}

but this is not
class Customer {
    name: string;
    age: number;
}

*/
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var cust = new person();
var cust1 = { name: 'Mary' }; //object literals
