var person1;
var person2;
person1 = JSON.parse('{ "adress": "25 Broadway" }'); // parser the json string
person2 = JSON.parse('{ "adress": "25 Broadway" }');
console.log(person1.address); // print undefined
// won’t even compile because we tried to use the person2 variable of unknown type without narrowing its type down.
// console.log(person2.address); 
/*
TypeScript allows you to write user-defined type guards that can check if an object is of a particular type.
 This would be a function that returns something like “this- FunctionArg is SomeType.”
 Let’s write an isPerson() type guard which assumes that if the object under test has an address property, it’s a person.
*/
// The double- bang operator !! will ensure that the given object is truthy.
var isPerson = function (object) { return !!object && object.discriminator === 'person'; };
// This type guard returns true if the given object has an address property. You can apply this guard as in the following listing.
if (isPerson(person2)) {
    console.log(person2.address);
}
else {
    console.log("person2 is not a Person");
}
