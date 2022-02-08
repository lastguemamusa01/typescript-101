/*
TypeScript allows you to create custom types with the type keyword, by declaring a class or an interface, or by declaring an enum (covered in chapter 4).

type
class
interface
enum

You can use the question mark to define optional properties in classes or interfaces as well.
weight?: Pound;

Many object-oriented languages include a syntax construct called interface,
which is used to enforce the implementation of specified properties or methods on an object.

JavaScript doesn’t support interfaces, but TypeScript does. In this section,
we’ll show you how to use interfaces to declare custom types

If the custom type doesn’t need to be used for instantiating objects at runtime,
use interface or type; otherwise use class. In other words,
use class for creating a custom type if it should be used to represent a value.

if the Person is type  or interface

if (p instanceof Person){ // compile error


*/
var patient = {
    name: 'Joe Smith',
    height: 5
};
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p = new Person();
p.firstName = "min ku";
p.lastName = "Smith";
p.age = 25;
var PersonWithContructor = /** @class */ (function () {
    function PersonWithContructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    return PersonWithContructor;
}());
// This would be an unnecessary use of an explicit type annotation. Since you declare a constant and immediately initialize it with an object of a known type (Person),
// const pImproved: Person =  is not neccesary
var pImproved = new PersonWithContructor("aldo", "sam", 30);
// When you declare properties of a class, you can also mark them as readonly. 
// Such properties can be initialized either at the declaration point or in the class constructor, 
// and their values can’t be changed afterwards. The readonly qualifier is similar to the const keyword, 
// but the latter can’t be used with class properties.
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
