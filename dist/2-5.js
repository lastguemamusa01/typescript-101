/*

The union type

Unions allow you to express that a value can be one of several types.

let padding: string | number;

bad code of using any

function padLeft(value: string, padding: any ): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

An attempt to apply conditional statements to refine a variable’s type is called type narrowing

if (typeof padding === "number") {

if (person instanceof Person) {...}

The difference between typeof and instanceof is that the former is used with the built-in TypeScript types and the latter with the custom ones.

using union make the throw error when there is another type with you are calling

*/
var padding;
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
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
