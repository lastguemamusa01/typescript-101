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

class Person1 {
    name: string;
}

class Customer {
    name: string;
}

const cust: Customer = new Person1();
const cust1: Customer = {name: 'Mary'};  //object literals
